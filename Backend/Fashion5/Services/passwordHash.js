const bcrypt = require("bcryptjs");

export const hashPassword = (_password) => {
  const output = bcrypt.hashSync(_password, 8);
  return output;
};

export const comparePasswords = () => {};
