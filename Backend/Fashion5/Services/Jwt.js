const jwt = require("jsonwebtoken");
require("dotenv").config();

//#####################################################

const generateToken = (user) => {
  const token = jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "1d" }
  );
  return token;
};

//#####################################################

module.exports = { generateToken };
