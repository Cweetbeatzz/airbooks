const express = require("express");
const Users = require("../Models/Users");
const bcrypt = require("bcryptjs");
// const passwordHasher = require("../Services/passwordHash");

const authRouter = express.Router();

//#############################################################

const hashPassword = (_password) => {
  const output = bcrypt.hashSync(_password, 8);
  return output;
};
//#############################################################
//
authRouter.post("/register", async (req, res) => {
  const hashedpass = hashPassword(req.body.password);
  const hashedConfirmpass = hashPassword(req.body.confirmPassword);

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
    confirmPassword: hashedConfirmpass,
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
