import mongoose from "mongoose";

const historySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  question: String,
  answer: String,
  language: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("History", historySchema);
