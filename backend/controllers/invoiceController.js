const Invoice = require("../models/invoiceModel");

//get invoices
const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//add invoice
const addInvoice = async (req, res) => {
  const { clientId, amount, status } = req.body;

  if (!clientId || !amount || !status) {
    return res.status(400).json({ message: "Client ID, amount, and status are required." });
  }

  try {
    const newInvoice = new Invoice({
      clientId,
      amount,
      status,
    });

    const savedInvoice = await newInvoice.save();
    res.status(201).json(savedInvoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getInvoices, addInvoice };