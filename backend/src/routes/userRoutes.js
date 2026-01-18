// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const multer = require("multer"); 
const {
  deleteUser,
  uploadPhoto,
  sendOTP,
  registerUser,
  loginUser,
  updateUser
} = require("../controllers/userController");

// Multer setup for photo upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

router.post("/send-otp", sendOTP);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);


router.post("/upload-photo/:id", upload.single("photo"), uploadPhoto);

module.exports = router;
