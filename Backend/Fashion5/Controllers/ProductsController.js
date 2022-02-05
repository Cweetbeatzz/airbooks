const ProductsModel = require("../Models/Products");

//
//#######################################################

const getAllProducts = async (req, res) => {
  const output = ProductsModel.find({});
  res.status(200).json({ output });
};

//
//#######################################################

const getProductsById = async (req, res) => {
  //
  const products = await ProductsModel.findById(req.params.id);

  if (!products) {
    res
      .status(404)
      .send({ message: `No Products found matching the following ID` });
  }
  res.send(products);
};

//
//#######################################################

const createProducts = async (req, res) => {
  const result = await ProductsModel.create(req.body);
  res.status(201).json({ result });
};

//
//#######################################################

const updateProductsById = async (req, res) => {
  //
  const product = await ProductsModel.findOneAndUpdate(req.params.id);

  if (!product) {
    res
      .status(404)
      .send({ message: `No Product found matching the following ID` });
  }
  res.send(product);
};

//
//#######################################################

const deleteProductsById = async (req, res) => {
  //
  const cat = await ProductsModel.findOneAndDelete(req.params.id);

  if (!cat) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.send(cat);
};

module.exports = {
  getAllProducts,
  getProductsById,
  createProducts,
  updateProductsById,
  deleteProductsById,
};
