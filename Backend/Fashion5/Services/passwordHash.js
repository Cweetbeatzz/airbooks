const bcrypt = require("bcryptjs");

//hash & salted password
const hashPassword = (_password) => {
  const output = bcrypt.hashSync(_password, 8);
  return output;
};

const comparePasswords = () => {};

module.exports = { hashPassword };
