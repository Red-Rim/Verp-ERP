const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  items: [{ name: String, price: Number, quantity: Number }],
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Order", orderSchema);