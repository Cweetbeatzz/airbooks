const Users = require("../Models/Users");
const express = require("express");
const userRouter = express.Router();

//#######################################################

userRouter.get("/getAllUsers", async (req, res) => {
  const allusers = await Users.find({});
  const { password, ...others } = allusers;
  res.status(200).json(others);
});

//#######################################################

userRouter.get("/getUsersById/:id", async (req, res) => {
  //
  const users = await Users.findById(req.params.id);

  if (!users) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.send(users);
});

//#######################################################

userRouter.post("/createUsers", async (req, res) => {
  const result = await Users.create(req.body);
  res.status(201).json({ result });
});

//#######################################################

userRouter.patch("/updateUsersById/:id", async (req, res) => {
  //
  const userById = await Users.findOneAndUpdate(req.params.id);

  if (!userById) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.send(userById);
});

//#######################################################

userRouter.delete("/deleteUsersById/:id", async (req, res) => {
  //
  const userById = await Users.findOneAndDelete(req.params.id);

  if (!userById) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.send(userById);
});

//#######################################################

userRouter.get("/search", async (req, res) => {});

//#######################################################

module.exports = userRouter;
