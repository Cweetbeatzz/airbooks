const { verifyToken } = require("../Services/Jwt");
const User = require("../Models/Users");
const { roles } = require("../utils/constants");

//###########################################

const ensureLogginIn = async (req, res, next) => {
  const authorization = req.headers.authorization;
  try {
    // JWT
    //must be logged in before access
    if (!authorization || !authorization.startsWith("Bearer")) {
      res.status(401).send({ message: "Error", data: "Please Login..." });
    }

    const token = authorization.split(" ")[1];
    const decoded = verifyToken(token);

    // const findUser = await User.findById(decoded.id);
    // req.User = findUser;
    // const { id, username, email, roles2 } = decoded;
    req.user = {
      id: decoded.id,
      username: decoded.username,
      email: decoded.email,
      roles2: decoded.roles2,
    };
    next();
  } catch (error) {
    res.status(401).send({ message: "Error", data: "Not Authorized..." });
  }
};

//###########################################
const ensureLoginWithPermissions = (permissions) => {
  return (req, res, next) => {
    const authorization = req.headers.authorization;

    try {
      // JWT
      //must be logged in before access
      if (!authorization || !authorization.startsWith("Bearer")) {
        res
          .status(401)
          .send({ message: "Error", data: "invalid credentials..." });
      }

      const token = authorization.split(" ")[1];
      const decoded = verifyToken(token);

      req.user = decoded.email;
      req.roles2 = decoded.roles2;

      if (permissions.includes(decoded.roles2)) {
        next();
      } else {
        res.status(401).send({ message: "Error", data: "Not Authorized..." });
      }
    } catch (error) {
      res.status(401).send({ message: "Error", data: "Not Authorized..." });
    }
  };
};

//###########################################

module.exports = { ensureLogginIn, ensureLoginWithPermissions };
