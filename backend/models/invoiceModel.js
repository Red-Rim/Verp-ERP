const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  amount: { type: Number, required: true },
  status: { type: String, enum: ["paid", "unpaid", "overdue", "pending"], default: "unpaid" },
});

module.exports = mongoose.model("Invoice", invoiceSchema);