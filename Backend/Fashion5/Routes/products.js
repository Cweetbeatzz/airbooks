const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductsStatic,
} = require("../Controllers/ProductsController");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);
