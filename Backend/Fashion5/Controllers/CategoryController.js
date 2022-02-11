const CategoryModel = require("../Models/Category");
const express = require("express");
const categoryRouter = express.Router();

//
//#######################################################

categoryRouter.get("/getAllCategories", async (req, res) => {
  const categories = await CategoryModel.find({});
  res.status(200).send(categories);
});

//
//#######################################################

categoryRouter.get("/getCategoriesById/:id", async (req, res) => {
  //
  const category = await CategoryModel.findById(req.params.id);

  if (!category) {
    res
      .status(404)
      .send({ message: `No Category found matching the following ID` });
  }
  res.status(200).send(category);
});

//
//#######################################################

categoryRouter.post("/createCategories", async (req, res) => {
  const newCategory = new CategoryModel({ name: req.body.name });
  try {
    await newCategory.save();
    res.status(201).send({ newCategory });
  } catch (error) {
    res.status(404).send(error);
  }
});

//
//#######################################################

categoryRouter.patch("/updateCategoriesById/:id", async (req, res) => {
  //
  const cat = await CategoryModel.findByIdAndUpdate(req.params.id);

  if (!cat) {
    res
      .status(404)
      .send({ message: `No Category found matching the following ID` });
  }
  
  res.status(200).send({ message: "Update Successful" });
});

//
//#######################################################

categoryRouter.delete("/deleteCategoriesById/:id", async (req, res) => {
  //
  const cat = await CategoryModel.findByIdAndDelete(req.params.id);

  if (!cat) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.status(200).send({});
});

//#######################################################

module.exports = categoryRouter;
