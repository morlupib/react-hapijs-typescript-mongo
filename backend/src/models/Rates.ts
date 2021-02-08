import { Schema, model, Document } from "mongoose";

export interface IRate extends Document {
  pair: String;
  original_rate: number;
  fee: number;
  fee_amount: number;
  rate_with_fee: number;
}

const rateSchema = new Schema(
  {
    pair: {
      type: String,
      required: true,
    },
    original_rate: {
      type: Number,
      required: true,
    },
    fee: {
      type: Number,
      required: true,
    },
    fee_amount: {
      type: Number,
      required: true,
    },
    rate_with_fee: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<IRate>("Rates", rateSchema);
