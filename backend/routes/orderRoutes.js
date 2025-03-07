const express = require("express");
const { getOrders, addOrder } = require("../controllers/orderController");
const router = express.Router();

//get orders
router.get("/", getOrders);

//create order
router.post("/", addOrder);

module.exports = router;