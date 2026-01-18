// backend/src/models/Rating.js
const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },

  fromUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  toUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },

  serviceType: {
    type: String,
    enum: [
      "labour_service",
      "transport_service",
      "farmer_management",
      "general",
    ],
    default: "general",
  },

  comment: {
    type: String,
    default: "",
    maxlength: 300,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Auto update the user's overall rating
RatingSchema.post("save", async function () {
  const Rating = this.constructor;
  const User = mongoose.model("User");

  const ratings = await Rating.find({ toUserId: this.toUserId });

  if (ratings.length === 0) return;

  const total = ratings.reduce((acc, r) => acc + r.rating, 0);
  const avg = total / ratings.length;

  await User.findByIdAndUpdate(this.toUserId, {
    "rating.totalRating": total,
    "rating.count": ratings.length,
  });
});

module.exports = mongoose.model("Rating", RatingSchema);
