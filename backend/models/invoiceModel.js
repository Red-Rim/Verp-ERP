const mongoose = require("mongoose");

const invoiceSchema = mongoose.Schema(
    {
        client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
        amount: { type: Number, required: true },
        status: { type: String, enum: ["pending", "paid"], default: "pending" }
    },
    { timestamps: true }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);
module.exports = Invoice;
