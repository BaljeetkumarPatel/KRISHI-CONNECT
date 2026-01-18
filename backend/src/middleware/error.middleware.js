// backend/src/middleware/error.middleware.js

module.exports = (err, req, res, next) => {
  console.error("❌ Error:", err.message);
  console.error("Stack:", err.stack);

  return res.status(500).json({
    success: false,
    message: "Internal Server Error",
    error: err.message
  });
};
