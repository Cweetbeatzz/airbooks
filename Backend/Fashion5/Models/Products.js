const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxlength: [30, "Name cannot exceed 30 characters"],
  },
  price: Number,
  category: String,
  image: String,
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
    maxlength: [150, "Description cannot exceed 150 characters"],
  },
  in_stock: { type: Boolean, default: true },
  is_active: { type: Boolean, default: true },
});

module.exports = mongoose.model("Products", ProductSchema);
