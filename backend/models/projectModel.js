const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
  budget: { type: Number, required: true },
  deadline: { type: Date, required: true },
});

module.exports = mongoose.model("Project", projectSchema);