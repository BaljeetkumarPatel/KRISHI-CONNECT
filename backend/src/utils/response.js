// backend/src/utils/response.js

module.exports = {
  success: (res, data = {}, message = "Success") => {
    return res.json({
      success: true,
      message,
      data,
    });
  },

  error: (res, message = "Something went wrong", code = 500) => {
    return res.status(code).json({
      success: false,
      message,
    });
  },

  validationError: (res, message = "Validation failed") => {
    return res.status(400).json({
      success: false,
      message,
    });
  }
};
