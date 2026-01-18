// backend/src/config/db.js

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); // ⬅ No extra options

    console.log(`📦 MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    console.log("Retrying in 5 seconds...");

    setTimeout(connectDB, 5000); // Retry every 5 seconds
  }
};

module.exports = connectDB;
