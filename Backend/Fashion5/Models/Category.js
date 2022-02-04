const mongoose = require("mongoose");

const CaterorySchema = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("Cartegory", CaterorySchema);
