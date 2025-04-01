import mongoose, { Schema } from "mongoose";

const merchantSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    balance: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Merchants = mongoose.model("Merchants", merchantSchema);
