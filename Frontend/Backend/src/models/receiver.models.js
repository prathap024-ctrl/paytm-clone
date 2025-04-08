import mongoose from "mongoose";

const receiverSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true, // user who added this receiver
    },
    receiverUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false, // if the receiver is a registered user
    },
    receiverName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    upiId: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Receiver = mongoose.model("Receiver", receiverSchema);
