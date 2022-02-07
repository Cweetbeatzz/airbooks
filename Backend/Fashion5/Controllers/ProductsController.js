const ProductsModel = require("../Models/Products");
const express = require("express");
const productsRouter = express.Router();
const { uploadLocation } = require("../Services/imageUploads");

//
//#######################################################

productsRouter.get("/getAllProducts", async (req, res) => {
  const output = ProductsModel.find({});
  res.status(200).json({ output });
});

//
//#######################################################

productsRouter.get("/getAllProductsByCategory", async (req, res) => {
  const qcategory = req.query.category;
  let products;

  products = await ProductsModel.find({ categories: { $in: [qcategory] } })
    .sort({ createdAt: -1 })
    .limit(15);

  res.status(200).json({ products });
});
//
//#######################################################

productsRouter.get("/getProductsById", async (req, res) => {
  //
  const products = await ProductsModel.findById(req.params.id);

  if (!products) {
    res
      .status(404)
      .send({ message: `No Products found matching the following ID` });
  }
  res.send(products);
});

//
//#######################################################

productsRouter.post(
  "/createProducts",
  uploadLocation.single("productImage"),
  async (req, res, next) => {
    //
    const result = await ProductsModel.create(req.body);
    res.status(201).json({ result });
  }
);

//
//#######################################################

productsRouter.patch("/updateProductsById", async (req, res) => {
  //
  const product = await ProductsModel.findOneAndUpdate(req.params.id);

  if (!product) {
    res
      .status(404)
      .send({ message: `No Product found matching the following ID` });
  }
  res.send(product);
});

//
//#######################################################

productsRouter.delete("/deleteProductsById", async (req, res) => {
  //
  const cat = await ProductsModel.findOneAndDelete(req.params.id);

  if (!cat) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.send(cat);
});

module.exports = productsRouter;
