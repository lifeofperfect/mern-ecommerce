const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById } = require("../controller/productController")


//get all products
//api/products
router.get("/", getAllProducts)


//get specific product
//api/products/id
router.get("/:id", getProductById)

module.exports = router;