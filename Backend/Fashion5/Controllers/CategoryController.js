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
  res.send(category);
});

//
//#######################################################

categoryRouter.post("/createCategories", async (req, res) => {
  const result = await CategoryModel.create(req.body);
  res.status(201).json({ result });
});

//
//#######################################################

categoryRouter.patch("/updateCategoriesById/:id", async (req, res) => {
  //
  const cat = await CategoryModel.findOneAndUpdate(req.params.id);

  if (!cat) {
    res
      .status(404)
      .send({ message: `No Category found matching the following ID` });
  }
  res.send({ message: "Update Successful" });
});

//
//#######################################################

categoryRouter.delete("/deleteCategoriesById/:id", async (req, res) => {
  //
  const cat = await CategoryModel.findOneAndDelete(req.params.id);

  if (!cat) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.send({});
});

//#######################################################

module.exports = categoryRouter;
