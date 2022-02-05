const CategoryModel = require("../Models/Category");

//
//#######################################################

const getAllCategories = async (req, res) => {
  const cat = await CategoryModel.find({});
  res.send(cat);
};

//
//#######################################################

const getCategoriesById = async (req, res) => {
  //
  const category = await CategoryModel.findById(req.params.id);

  if (!category) {
    res
      .status(404)
      .send({ message: `No Category found matching the following ID` });
  }
  res.send(category);
};

//
//#######################################################

const createCategories = async (req, res) => {
  const result = await CategoryModel.create(req.body);
  res.status(201).json({ result });
};

//
//#######################################################

const updateCategoriesById = async (req, res) => {
  //
  const cat = await CategoryModel.findOneAndUpdate(req.params.id);

  if (!cat) {
    res
      .status(404)
      .send({ message: `No Category found matching the following ID` });
  }
  res.send(cat);
};

//
//#######################################################

const deleteCategoriesById = async (req, res) => {
  //
  const cat = await CategoryModel.findOneAndDelete(req.params.id);

  if (!cat) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.send(cat);
};

//#######################################################

module.exports = {
  getAllCategories,
  getCategoriesById,
  createCategories,
  updateCategoriesById,
  deleteCategoriesById,
};
