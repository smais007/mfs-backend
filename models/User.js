const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  pin: String,
  mobileNumber: String,
  email: String,
  balance: { type: Number, default: 0 },
  role: { type: String, default: "user" },
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("User", userSchema);
