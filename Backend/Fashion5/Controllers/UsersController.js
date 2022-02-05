const Users = require("../Models/Users");

//#######################################################

const getAllUsers = async (req, res) => {
  const allusers = await Users.find({});
  res.send(allusers);
};

//#######################################################

const getUsersById = async (req, res) => {
  //
  const users = await Users.findById(req.params.id);

  if (!users) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.send(users);
};

//#######################################################

const createUsers = async (req, res) => {
  const result = await Users.create(req.body);
  res.status(201).json({ result });
};

//#######################################################

const updateUsersById = async (req, res) => {
  //
  const users = await Users.findOneAndUpdate(req.params.id);

  if (!users) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.send(users);
};

//#######################################################

const deleteUsersById = async (req, res) => {
  //
  const users = await Users.findOneAndDelete(req.params.id);

  if (!users) {
    res.status(404).send({ message: `No task matching the following ID` });
  }
  res.send(users);
};

//#######################################################

const searchUserByEmailOrUsername = async () => {};

//#######################################################

module.exports = {
  getAllUsers,
  createUsers,
  getUsersById,
  updateUsersById,
  deleteUsersById,
};
