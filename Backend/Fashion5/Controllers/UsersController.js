const Users = require("../Models/Users");
const express = require("express");
const userRouter = express.Router();
const { hashPassword } = require("../Services/passwordHash");
const { generateToken } = require("../Services/Jwt");

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
  const hashedpass = hashPassword(req.body.password);

  const newUser = new Users({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    country: req.body.country,
    state: req.body.state,
    postalcode: req.body.postalcode,
    password: hashedpass,
  });

  try {
    const created = await newUser.save();
    res.status(201).json({
      id: created._id,
      username: created.username,
      email: created.email,
      isAdmin: created.isAdmin,
      isClient: created.isClient,
      isSeller: created.isSeller,
      isTransit: created.isTransit,
      // token: generateToken(created),
    });
  } catch (error) {
    res.status(404).send(error);
  }
});

//#######################################################

userRouter.put("/updateUsersById/:id", async (req, res) => {
  const hashedpass = hashPassword(req.body.password);
  let oldUserDetails = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    username: req.body.username,
    email: req.body.email,
    address: req.body.address,
    phone: req.body.phone,
    country: req.body.country,
    state: req.body.state,
    postalcode: req.body.postalcode,
    password: hashedpass,
  };
  //
  const userById = await Users.findByIdAndUpdate(req.params.id, {
    $set: oldUserDetails,
  });

  if (!userById) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.status(200).send({ message: "Update Successful" });
});

//#######################################################

userRouter.delete("/deleteUsersById/:id", async (req, res) => {
  //
  const userById = await Users.findByIdAndDelete(req.params.id);

  if (!userById) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.send(userById);
});

//#######################################################

userRouter.get("/search", async (req, res) => {});

//#######################################################

module.exports = userRouter;
