const express = require("express");
const Users = require("../Models/Users");

const authRouter = express.Router();

//#############################################################
//
authRouter.post("/register", async (req, res) => {
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
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  try {
    await newUser.save();
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(404).send(error);
  }
});

//#############################################################
//
authRouter.post("/login", (req, res) => {});

//#############################################################

authRouter.post("/logout", (req, res) => {});

//#############################################################

module.exports = authRouter;
