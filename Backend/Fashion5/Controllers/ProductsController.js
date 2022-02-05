const ProductsModel = require("../Models/Products");
const express = require("express");
const productsRouter = express.Router();

//
//#######################################################

productsRouter.get("/getAllProducts", async (req, res) => {
  const output = ProductsModel.find({});
  res.status(200).json({ output });
});

//
//#######################################################

productsRouter.get("/getAllProductsByCategory", async (req, res) => {
  const prod = req.query.new;
  const qcategory = req.query.category;
  let products;

  try {
    if (prod) {
      products = await ProductsModel.find().sort({ createdAt: -1 }).limit(15);
    } else if (qcategory) {
      products = await ProductsModel.find({ categories: { $in: [qcategory] } })
        .sort({ createdAt: -1 })
        .limit(15);
    } else {
      products = ProductsModel.find({});
    }
  } catch (error) {
    res.status(404).send(error);
  }
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

productsRouter.post("/createProducts", async (req, res) => {
  const result = await ProductsModel.create(req.body);
  res.status(201).json({ result });
});

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
