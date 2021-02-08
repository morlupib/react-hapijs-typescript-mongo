import { getPairs } from "./controllers/rates.controller";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/mongodb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("Db is connected");
    getPairs();
  })
  .catch((err) => console.log(err));
