import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    receiverName: {
      type: String,
    },
    phone: {
      type: String,
    },
    receiverUpiId: {
      type: String,
    },
    amount: {
      type: Number,
      required: true,
    },
    wallet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Wallet",
      required: true,
    },
    upiProvider: {
      type: String,
    },
    type: {
      type: String,
      enum: ["add", "send", "receive"],
      default: "send",
    },
  },
  {
    timestamps: true,
  }
);

export const Transactions = mongoose.model("Transactions", transactionSchema);
