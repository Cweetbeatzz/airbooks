const ProductsModel = require("../Models/Products");
const express = require("express");
const productsRouter = express.Router();
const { uploadLocation } = require("../Services/imageUploads");

//#######################################################

productsRouter.get("/getAllProducts", async (req, res) => {
  const products = await ProductsModel.find({});
  res.status(200).send(products);
});

//
//#######################################################

productsRouter.get("/getAllProductsByCategory", async (req, res) => {
  const qcategory = req.query.category;
  let products;

  products = await ProductsModel.find({ categories: { $in: [qcategory] } })
    .sort({ createdAt: -1 })
    .limit(30);

  res.status(200).send({ products });
});

//#######################################################

productsRouter.get("/getProductsById/:id", async (req, res) => {
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
    const newProduct = new ProductsModel({
      name: req.body.name,
      price: req.body.price,
      category: req.body.category,
      company: req.body.company,
      productImage: req.file.path,
      description: req.body.description,
    });
    try {
      await newProduct.save();
      res.status(201).send({ newProduct });
    } catch (error) {
      res.status(404).send(error);
    }
  }
);

//
//#######################################################

productsRouter.patch("/updateProductsById/:id", async (req, res) => {
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

productsRouter.delete("/deleteProductsById/:id", async (req, res) => {
  //
  const cat = await ProductsModel.findOneAndDelete(req.params.id);

  if (!cat) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.status(200).send({ message: "Product Deleted" });
});

module.exports = productsRouter;
