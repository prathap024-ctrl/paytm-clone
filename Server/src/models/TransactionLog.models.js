import mongoose, { Schema } from "mongoose";

const transactionLogSchema = new Schema(
  {
    transaction: {
      type: Schema.Types.ObjectId,
      ref: "Transactions",
    },
    event: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const TransactionLog = mongoose.model(
  "TransactionLog",
  transactionLogSchema
);
