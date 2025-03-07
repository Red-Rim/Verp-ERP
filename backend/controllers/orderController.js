const Order = require("../models/orderModel");


//get orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//create new order
const addOrder = async (req, res) => {
  const { orderId, clientId, totalPrice, status } = req.body;

  try {
    const newOrder = new Order({
      orderId,
      clientId,
      totalPrice,
      status,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addOrder, getOrders };