import { Request, ResponseToolkit, ResponseObject } from "@hapi/hapi";
import axios from "axios";
import Rates, { IRate } from "../models/Rates";

const FEE = 0.02;
const URL =
  "http://data.fixer.io/api/latest?access_key=ffcc344a3f31700c0020d166fd17ea96&symbols=USD,ARS,BRL";

export const createRate = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const rate: IRate = new Rates(request.payload);
    const rateSaved = await rate.save();
    return h.response(rateSaved);
  } catch (error) {
    return h.response(error).code(500);
  }
};

export const getRates = async (
  request: Request,
  h: ResponseToolkit
): Promise<ResponseObject> => {
  try {
    const rates: IRate[] = await Rates.find();
    return h.response(rates);
  } catch (error) {
    return h.response(error).code(500);
  }
};

export const getPairs = async () => {
  try {
    const response = await axios.get(URL);
    if (response.data.success) {
      await fillDB(response.data);
    }
    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const fillDB = async (data: any) => {
  try {
    await Rates.deleteMany({});
    for (const key in data.rates) {
      const rate = new Rates({
        pair: data.base + key,
        original_rate: data.rates[key],
        fee: FEE,
        fee_amount: data.rates[key] * FEE,
        rate_with_fee: data.rates[key] * (FEE + 1),
      });
      await rate.save();
    }

    const usdars = new Rates({
      pair: "USDARS",
      original_rate: data.rates["ARS"] / data.rates["USD"],
      fee: FEE,
      fee_amount: (data.rates["ARS"] / data.rates["USD"]) * FEE,
      rate_with_fee: (data.rates["ARS"] / data.rates["USD"]) * (FEE + 1),
    });
    await usdars.save();

    const usdbrl = new Rates({
      pair: "USDBRL",
      original_rate: data.rates["BRL"] / data.rates["USD"],
      fee: FEE,
      fee_amount: (data.rates["BRL"] / data.rates["USD"]) * FEE,
      rate_with_fee: (data.rates["BRL"] / data.rates["USD"]) * (FEE + 1),
    });
    await usdbrl.save();

    const brlars = new Rates({
      pair: "BRLARS",
      original_rate: data.rates["ARS"] / data.rates["BRL"],
      fee: FEE,
      fee_amount: (data.rates["ARS"] / data.rates["BRL"]) * FEE,
      rate_with_fee: (data.rates["ARS"] / data.rates["BRL"]) * (FEE + 1),
    });
    await brlars.save();

    return;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
