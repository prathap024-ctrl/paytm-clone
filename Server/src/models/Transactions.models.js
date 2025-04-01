import mongoose, { Schema } from "mongoose";

const TransactionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    merchant: {
      type: Schema.Types.ObjectId,
      ref: "Merchants",
    },
    amount: {
      type: Number,
      required: true,
    },
    transactionType: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const Transactions = mongoose.model("Transactions", TransactionSchema);
