const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  address: String,
  phone: Int32Array,
  country: String,
  state: String,
  postalcode: String,
  password: String,
  confirmPassword: String,
});

module.exports = mongoose.model("Users", UserSchema);
