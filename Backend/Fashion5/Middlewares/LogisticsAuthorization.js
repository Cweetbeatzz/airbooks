const { roles } = require("../utils/constants");
const { verifyToken } = require("../Services/Jwt");

//#######################################################

const ensureLogistics = (req, res, next) => {
  const authorization = req.headers.authorization;

  try {
    const token = authorization.split("")[1];
    const decoded = verifyToken(token);
    const { role2 } = decoded;

    if (role2 === roles.logistics) {
      next();
    }
  } catch (error) {
    res
      .status(401)
      .send({
        message: "Error",
        data: "Not Authorized...Logistics Access only",
      });
  }
};

//#######################################################

module.exports = { ensureLogistics };
