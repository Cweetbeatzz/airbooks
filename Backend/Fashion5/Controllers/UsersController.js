const Users = require("../Models/Users.js");
const data = require("../data.js");

//
const getAllUsers = async (req, res) => {
  const allusers = await Users.find({});
  res.send(allusers);
};
//
const getUsersById = async (req, res) => {
  //
  const users = await Users.findById(req.params.id);

  if (!users) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.send(users);
};
//
const createUsers = async (req, res) => {
  const result = await Users.insertMany(data.users);
  res.send({ result });
};
//
const updateUsersById = async (req, res) => {};
//
const deleteUsersById = async (req, res) => {};

module.exports = { getAllUsers, createUsers };
