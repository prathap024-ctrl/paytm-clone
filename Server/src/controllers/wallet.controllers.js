import { Wallet } from "../models/Wallet.models.js";
import { Transactions } from "../models/Transactions.models.js";
import { User } from "../models/Users.models.js";
import { Receiver } from "../models/receiver.models.js";

// ------------------- ADD MONEY -------------------
const addMoneyToWallet = async (req, res) => {
  try {
    const userId = req.user._id;
    const { amount } = req.body;

    const wallet = await Wallet.findOne({ user: userId });

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found." });
    }

    wallet.walletBalance += parseFloat(amount); // ✅ Corrected field name
    await wallet.save();

    await Transactions.create({
      user: userId,
      amount,
      wallet: wallet._id,
      type: "add",
      upiProvider: "Wallet Recharge",
    });

    res.status(200).json({
      message: "Amount added successfully",
      data: { walletBalance: wallet.walletBalance },
    });
  } catch (error) {
    console.error("Add money error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ------------------- GET BALANCE -------------------
const getWalletBalance = async (req, res) => {
  try {
    const userId = req.user._id;
    const wallet = await Wallet.findOne({ user: userId });

    if (!wallet) {
      return res.status(404).json({ message: "Wallet not found" });
    }

    res.status(200).json({
      message: "Wallet balance fetched successfully",
      data: { walletBalance: wallet.walletBalance },
    });
  } catch (error) {
    console.error("Get balance error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ------------------- SEND MONEY -------------------

const sendMoney = async (req, res) => {
  try {
    const { receiverUpiId, phone, receiverName, amount } = req.body;

    const userId = req.user?._id;
    console.log("User ID from token:", userId);

    if (!receiverUpiId && !phone) {
      return res.status(400).json({
        message: "Receiver UPI or phone number is required.",
      });
    }

    const senderWallet = await Wallet.findOne({ user: userId });
    console.log("Sender Wallet:", senderWallet);

    if (!senderWallet) {
      return res.status(404).json({ message: "Sender wallet not found" });
    }

    const numericAmount = parseFloat(amount);
    if (senderWallet.walletBalance < numericAmount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    let receiver = await User.findOne({
      $or: [{ upiId: receiverUpiId }, { phone }],
    });

    let receiverUserId = null;
    let finalReceiverName = receiverName;

    if (receiver) {
      receiverUserId = receiver._id;
      const receiverWallet = await Wallet.findOne({ user: receiverUserId });

      if (!receiverWallet) {
        return res.status(404).json({ message: "Receiver wallet not found" });
      }

      finalReceiverName = receiver.name || receiverName;

      // Create sender and receiver transactions
      await Transactions.create({
        sender: userId,
        receiver: receiverUserId,
        receiverName: finalReceiverName,
        phone: receiver.phone,
        receiverUpiId: receiver.upiId,
        amount: numericAmount,
        wallet: senderWallet._id,
        upiProvider: "PayMate",
        type: "send",
      });

      await Transactions.create({
        sender: userId,
        receiver: receiverUserId,
        receiverName: finalReceiverName,
        phone: receiver.phone,
        receiverUpiId: receiver.upiId,
        amount: numericAmount,
        wallet: receiverWallet._id,
        upiProvider: "PayMate",
        type: "receive",
      });

      await Receiver.findOneAndUpdate(
        {
          owner: userId,
          $or: [{ phone: receiver.phone }, { upiId: receiver.upiId }],
        },
        {
          owner: userId,
          receiverUser: receiverUserId,
          receiverName: finalReceiverName,
          phone: receiver.phone,
          upiId: receiver.upiId,
        },
        { upsert: true, new: true }
      );

      return res.status(200).json({ message: "Money sent successfully" });
    }

    // Receiver not registered → only deduct from sender
    senderWallet.walletBalance -= numericAmount;
    await senderWallet.save();

    await Transactions.create({
      sender: userId,
      receiver: null,
      receiverName: receiverName || "External Receiver",
      phone,
      receiverUpiId,
      amount: numericAmount,
      wallet: senderWallet._id,
      upiProvider: "PayMate",
      type: "send",
    });

    await Receiver.findOneAndUpdate(
      {
        owner: userId,
        $or: [{ phone }, { upiId: receiverUpiId }],
      },
      {
        owner: userId,
        receiverName: receiverName || "External Receiver",
        phone,
        upiId: receiverUpiId,
      },
      { upsert: true, new: true }
    );

    return res
      .status(200)
      .json({ message: "Money sent to unregistered user successfully" });
  } catch (error) {
    console.error("Send money error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ------------------- Transactions HISTORY -------------------
const getTransactionsHistory = async (req, res) => {
  try {
    const userId = req.user._id;

    const Transactionss = await Transactions.find({
      $or: [{ sender: userId }, { receiver: userId }, { user: userId }],
    })
      .sort({ createdAt: -1 })
      .lean();

    res.status(200).json({
      message: "Transactionss fetched successfully",
      data: Transactionss,
    });
  } catch (error) {
    console.error("Fetch Transactions history error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export {
  addMoneyToWallet,
  getWalletBalance,
  sendMoney,
  getTransactionsHistory,
};
