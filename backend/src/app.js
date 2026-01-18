// backend/src/app.js

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

// ---- Middlewares ----
app.use(cors());
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ extended: true }));

// ---- API Routes ----
app.use("/api", routes);

// ---- Health check ----
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "IVR Backend API Running 🚀"
  });
});

// ---- Global Error Middleware ----
app.use(errorMiddleware);

module.exports = app;
