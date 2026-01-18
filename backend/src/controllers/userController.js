// controllers/userController.js

const User = require("../models/User");
const jwt = require("jsonwebtoken");
// -----------------------------------------------
// SEND OTP  (STATIC OTP = 1111)
// -----------------------------------------------
exports.sendOTP = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ message: "Phone number is required" });
    }

    // Here you can integrate actual SMS provider later
    const otp = "1111";

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp, // remove in production
    });

  } catch (error) {
    console.log("OTP Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// -----------------------------------------------
// REGISTER USER
// -----------------------------------------------
exports.registerUser = async (req, res) => {
  try {
    const { phone, role, language, pincode, otp } = req.body;

    if (!phone || !role || !language || !pincode || !otp) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // OTP check
    if (otp !== "1111") {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Check already exists
    let existing = await User.findOne({ phone });
    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Save user
    const newUser = await User.create({
      phone,
      role,
      language,
      pincode,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    console.log("Register Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// -----------------------------------------------
// LOGIN USER
// -----------------------------------------------
exports.loginUser = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({ message: "Phone & OTP required" });
    }

    if (otp !== "1111") {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    let user = await User.findOne({ phone });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    return res.status(200).json({
      success: true,
      message: "Login success",
      user,
    });
  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      req.body,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      message: "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log("Update User Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error during profile update",
    });
  }
};


exports.uploadPhoto = async (req, res) => {
  try {
    const userId = req.params.id;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const photoUrl = `/uploads/${req.file.filename}`;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { photo: photoUrl },
      { new: true }
    );

    res.json({
      success: true,
      message: "Photo uploaded successfully",
      photo: photoUrl,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Photo Upload Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to upload photo",
    });
  }
};



exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting user",
    });
  }
};


function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

// -----------------------------------------------
// LOGIN USER (OTP BASED)
// -----------------------------------------------
exports.loginUser = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
      return res.status(400).json({ message: "Phone & OTP required" });
    }

    if (otp !== "1111") {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    let user = await User.findOne({ phone });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

   return res.status(200).json({
  success: true,
  message: "Login success",
  user: {
    ...user._doc,
    pin: otp, // ⭐ MUST ADD THIS FOR REQUIREMENT FORM
  },
});

  } catch (error) {
    console.log("Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
