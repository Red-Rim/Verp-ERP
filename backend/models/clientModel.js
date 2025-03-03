const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        company: { type: String }
    },
    { timestamps: true }
);

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
