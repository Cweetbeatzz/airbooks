const bcrypt = require("bcryptjs");

const data = {
  users: [
    {
      firstname: "ojo",
      lastname: "emmanuel",
      username: "cweetbeatz",
      email: "cweetbeatz@gmail.com",
      address: "no eeegrn jijii da silva estate",
      phone: "12345678900",
      country: "Nigeria",
      state: "Lagos",
      postalcode: "100244",
      password: bcrypt.hashSync("12345", 8),
      confirmPassword: ("12345", 8),
      isAdmin: true,
    },
    {
      firstname: "ojo",
      lastname: "yemi",
      username: "yemi",
      email: "yemi@gmail.com",
      address: "no eeegrn jijii da silva estate",
      phone: "12345678900",
      country: "Nigeria",
      state: "Lagos",
      postalcode: "100244",
      password: bcrypt.hashSync("12345", 8),
      confirmPassword: ("12345", 8),
      isAdmin: false,
    },
  ],
};
