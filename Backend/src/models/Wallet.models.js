import mongoose, { Schema } from "mongoose";

const WalletSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // Ensure one wallet per user
    },
    upiId: {
      type: String,
      required: true,
      unique: true, // Ensure UPI ID is unique across users
    },
    walletBalance: {
      type: Number,
      default: 0,
    },
    upiProvider: {
      type: String, // Optional (e.g., Paytm, PhonePe)
    },
  },
  { timestamps: true }
);

export const Wallet = mongoose.model("Wallet", WalletSchema);
