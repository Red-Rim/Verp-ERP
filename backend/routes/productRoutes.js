const express = require("express");
const { getTopProducts, addProduct } = require("../controllers/productController");

const router = express.Router();

router.get("/top", getTopProducts);
router.post("/", addProduct);

module.exports = router;