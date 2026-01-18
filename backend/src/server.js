// backend/src/server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");



const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const path = require("path");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

connectDB();

app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/user", require("./routes/userRoutes"));
app.use("/api/bot", require("./routes/botRoutes"));
app.use("/api/history", require("./routes/historyRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));

app.get("/", (req, res) => {
  res.send("API is running...");
});

// ---------------------------
// START SERVER
// ---------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
