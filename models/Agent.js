const mongoose = require("mongoose");

const agentSchema = new mongoose.Schema({
  name: String,
  pin: String,
  mobileNumber: String,
  email: String,
  balance: { type: Number, default: 0 },
  role: { type: String, default: "agent" },
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Agent", agentSchema);
