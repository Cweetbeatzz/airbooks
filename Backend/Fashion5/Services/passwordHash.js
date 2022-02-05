const bcrypt = require("bcryptjs");

const hashPassword = (_password) => {
  const output = bcrypt.hashSync(_password, 8);
  return output;
};

module.exports = hashPassword();
