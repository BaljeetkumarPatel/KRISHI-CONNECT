import History from "../models/History.js";

export const getHistory = async (req, res) => {
  const data = await History.find({ userId: req.user._id }).sort({ createdAt: -1 });
  res.json(data);
};
