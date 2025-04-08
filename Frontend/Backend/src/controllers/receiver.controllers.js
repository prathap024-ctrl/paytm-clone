import Receiver from "../models/receiver.model.js";
import User from "../models/user.model.js";

// CREATE or SAVE a receiver
export const saveReceiver = async (req, res) => {
  try {
    const { receiverName, phone, upiId, notes } = req.body;
    const ownerId = req.user._id;

    const existingUser = await User.findOne({
      $or: [{ phone }, { upiId }],
    });

    const receiver = await Receiver.create({
      owner: ownerId,
      receiverUser: existingUser?._id || undefined,
      receiverName,
      phone,
      upiId,
      notes,
    });

    res.status(201).json({ message: "Receiver saved", data: receiver });
  } catch (error) {
    console.error("Save receiver error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// GET all saved receivers
export const getReceivers = async (req, res) => {
  try {
    const receivers = await Receiver.find({ owner: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json({ message: "Receivers fetched", data: receivers });
  } catch (error) {
    console.error("Get receivers error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// DELETE a receiver
export const deleteReceiver = async (req, res) => {
  try {
    const { receiverId } = req.params;
    await Receiver.deleteOne({ _id: receiverId, owner: req.user._id });
    res.status(200).json({ message: "Receiver deleted" });
  } catch (error) {
    console.error("Delete receiver error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
