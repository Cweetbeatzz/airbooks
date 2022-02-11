const mongoose = require("mongoose");

const CaterorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category Name is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CaterorySchema);
