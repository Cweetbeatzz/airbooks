const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Firstname is Required"],
      trim: true,
      maxlength: [50, "Firstname must not exceed 50 characters"],
    },
    lastname: {
      type: String,
      required: [true, "Lastname is Required"],
      trim: true,
      maxlength: [50, "Lastname must not exceed 50 characters"],
    },
    username: {
      type: String,
      required: [true, "Username is Required"],
      trim: true,
      maxlength: [50, "Username must not exceed 50 characters"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is Required"],
      trim: true,
      maxlength: [250, "Email must not exceed 250 characters"],
      unique: true,
    },
    address: {
      type: String,
      required: [true, "Address is Required"],
      trim: true,
      maxlength: [450, "Address must not exceed 450 characters"],
    },
    phone: Int32Array,
    country: {
      type: String,
      required: [true, "Country is Required"],
      trim: true,
      maxlength: [150, "Country must not exceed 150 characters"],
    },
    state: {
      type: String,
      required: [true, "State is Required"],
      trim: true,
      maxlength: [150, "State must not exceed 150 characters"],
    },
    postalcode: String,
    password: {
      type: String,
      required: [true, "Password is Required"],
      trim: true,
    },
    confirmPassword: {
      type: String,
      required: [true, "Confirm Password is Required"],
      trim: true,
    },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", UserSchema);
