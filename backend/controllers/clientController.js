const Client = require("../models/clientModel");

const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching clients" });
  }
};

const addClient = async (req, res) => {
  try {
    const { name, email } = req.body;
    const client = new Client({ name, email });
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ message: "Error adding client" });
  }
};

module.exports = { getClients, addClient };