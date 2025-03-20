const Product = require("../models/productModel");

//top products
const getTopProducts = async (req, res) => {
  try {
    const topProducts = await Product.find()
      .sort({ clientCount: -1 })
      .limit(10);

    res.status(200).json(topProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  const { name, price, category, stock } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({ message: "Name, price, and category are required." });
  }

  try {
    const newProduct = new Product({ name, price, category, stock });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getTopProducts, addProduct };