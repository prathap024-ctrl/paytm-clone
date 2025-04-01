import mongoose, { Schema } from "mongoose";

const PaymentMethodSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    methodType: {
      type: String,
      required: true,
      trim: true,
    },
    details: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export const PaymentMethod = mongoose.model(
  "PaymentMethod",
  PaymentMethodSchema
);
