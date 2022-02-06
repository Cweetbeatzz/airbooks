const mongoose = require("mongoose");

const CaterorySchema = mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CaterorySchema);
