const CategoryModel = require("../Models/Category");
const express = require("express");
const catrgoryRouter = express.Router();

//
//#######################################################

catrgoryRouter.get("/getAllCategories", async (req, res) => {
  const cat = await CategoryModel.find({});
  res.send(cat);
});

//
//#######################################################

catrgoryRouter.get("/getCategoriesById/:id", async (req, res) => {
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

catrgoryRouter.post("/createCategories", async (req, res) => {
  const result = await CategoryModel.create(req.body);
  res.status(201).json({ result });
});

//
//#######################################################

catrgoryRouter.patch("/updateCategoriesById/:id", async (req, res) => {
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

catrgoryRouter.delete("/deleteCategoriesById/:id", async (req, res) => {
  //
  const cat = await CategoryModel.findOneAndDelete(req.params.id);

  if (!cat) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.send({});
});

//#######################################################

module.exports = catrgoryRouter;
