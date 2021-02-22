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
      required: false,
    },
    rate_with_fee: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

rateSchema.pre<IRate>("save", async function (next) {
  const rate = this;

  rate.fee_amount = rate.original_rate * rate.fee;
  rate.rate_with_fee = rate.original_rate * (rate.fee + 1);

  next();
});

export default model<IRate>("Rates", rateSchema);
