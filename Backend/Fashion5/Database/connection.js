const connectionString = process.env.MONGO_DB_CONNECTION_STRING;
//########################################################################
const mongoose = require("mongoose");

const connection = () => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connection;
