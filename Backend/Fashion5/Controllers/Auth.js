const express = require("express");
const Users = require("../Models/Users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
    await newUser.save();
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(404).send(error);
  }
});

//#############################################################
//
authRouter.post("/login", (req, res) => {
  try {
    const searchEmail = Users.findOne({ email: req.body.email });
    // const hashedpass = bcrypt;
    const accessToken = jwt.sign(
      {
        id: Users._id,
        isAdmin: Users.isAdmin,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1d" }
    );
    //destructure the search result and exclude password visibility
    const { password, ...others } = searchEmail;
    res.status(200).json({ others, accessToken });
  } catch (error) {
    res.status(404).send(error);
  }
});

//#############################################################

authRouter.post("/logout", (req, res) => {});

//#############################################################

module.exports = authRouter;
