const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
    {
        client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
        total: { type: Number, required: true },
        status: { type: String, enum: ["pending", "completed"], default: "pending" }
    },
    { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
