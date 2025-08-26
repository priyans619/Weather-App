import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String },
});

export default mongoose.model("City", citySchema);
