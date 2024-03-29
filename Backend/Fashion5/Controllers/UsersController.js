const Users = require("../Models/Users");
const Roles = require("../Models/Roles");
const express = require("express");
const userRouter = express.Router();
const { hashPassword } = require("../Services/passwordHash");
const { generateToken } = require("../Services/Jwt");
const { roles } = require("../utils/constants");
const {
  ensureLogginIn,
  ensureLoginWithPermissions,
} = require("../Middlewares/LoggedInAuthorization");
const { ensureAdmin } = require("../Middlewares/AdminAuthorization");

//#######################################################

userRouter.get(
  "/getAllUsers",
  // ensureLogginIn,
  ensureLoginWithPermissions([roles.manager, roles.admin]),
  // ensureAdmin,
  async (req, res) => {
    const users = await Users.find();
    res.status(200).json({
      message: "Success",
      data: users,
    });
  }
);

//#######################################################

userRouter.get(
  "/getUsersById/:id",
  // ensureLogginIn,
  ensureLoginWithPermissions([roles.manager, roles.admin]),
  // ensureAdmin,
  async (req, res) => {
    //
    const users = await Users.findById(req.params.id);

    if (!users) {
      res.status(404).send({ message: `No task matching the following ID` });
    }
    res.status(200).send({
      message: "Success",
      data: {
        firstname: users.firstname,
        lastname: users.lastname,
        username: users.username,
        email: users.email,
        address: users.address,
        phone: users.phone,
        country: users.country,
        state: users.state,
        postalcode: users.postalcode,
        roles2: users.roles2,
      },
    });
  }
);

//#######################################################

userRouter.post("/createUsers", async (req, res) => {
  const {
    firstname,
    lastname,
    username,
    email,
    address,
    phone,
    country,
    state,
    postalcode,
    password,
    userRole,
  } = req.body;
  const hashedpass = hashPassword(password);
  let setRole = userRole;

  if (email === process.env.ADMIN_EMAIL || setRole === roles.admin) {
    //set role to admin
    setRole = roles.admin;
  } else if (email === process.env.MANAGER_EMAIL || setRole === roles.manager) {
    //set role to manager
    setRole = roles.manager;
  } else if (email === process.env.CEO_EMAIL || setRole === roles.ceo) {
    //set role to ceo
    setRole = roles.ceo;
  } else {
    setRole = roles.client;
  }

  const newUser = new Users({
    firstname: firstname,
    lastname: lastname,
    username: username,
    email: email,
    address: address,
    phone: phone,
    country: country,
    state: state,
    postalcode: postalcode,
    password: hashedpass,
    roles2: setRole,
    // userRoles: [...userRoles, setRole],
  });

  try {
    const created = await newUser.save();
    res.status(201).json({
      id: created._id,
      firstname: created.firstname,
      lastname: created.lastname,
      username: created.username,
      email: created.email,
      address: created.address,
      phone: created.phone,
      country: created.country,
      state: created.state,
      postalcode: created.postalcode,
      roles2: created.roles2,
    });
  } catch (error) {
    res.status(404).send(error);
  }
});

//#######################################################

userRouter.put(
  "/updateUsersById/:id",
  // ensureLogginIn,
  ensureLoginWithPermissions([roles.manager, roles.admin]),
  // ensureAdmin,
  async (req, res) => {
    const hashedpass = hashPassword(req.body.password);
    let oldUserDetails = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      country: req.body.country,
      state: req.body.state,
      postalcode: req.body.postalcode,
      password: hashedpass,
    };
    //
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, {
      $set: oldUserDetails,
    });

    if (!updatedUser) {
      res.status(404).send({ message: `No task matching the following ID` });
    }
    res.status(200).send([
      { message: "Update Successful" },
      {
        firstname: updatedUser.firstname,
        lastname: updatedUser.lastname,
        username: updatedUser.username,
        email: updatedUser.email,
        address: updatedUser.address,
        phone: updatedUser.phone,
        country: updatedUser.country,
        state: updatedUser.state,
        postalcode: updatedUser.postalcode,
        roles2: updatedUser.roles2,
      },
    ]);
  }
);

//#######################################################

userRouter.delete(
  "/deleteUsersById/:id",
  // ensureLogginIn,
  ensureLoginWithPermissions([roles.manager, roles.admin]),
  // ensureAdmin,
  async (req, res) => {
    //
    const userById = await Users.findByIdAndDelete(req.params.id);

    if (!userById) {
      res.status(404).send({ message: `No task matching the following ID` });
    }
    res.status(200).send([{ message: `Delete Successfull` }, {}]);
  }
);

//#######################################################

userRouter.get(
  `/search/:email`,
  // ensureLogginIn,
  ensureLoginWithPermissions([roles.manager, roles.admin]),
  // ensureAdmin,
  async (req, res) => {
    //########
    const _email = req.body.email;
    const getSearch = await Users.findOne(_email);
    //########
    if (!getSearch) {
      res.status(404).send({ message: `No Email Found` });
    }
    //########
    res.status(200).send(getSearch);
  }
);
//#######################################################

userRouter.put(
  `/add-user-to-role/:id`,
  // ensureLogginIn,
  ensureLoginWithPermissions([roles.manager, roles.admin]),
  // ensureAdmin,
  async (req, res) => {
    //########
    const { id } = req.params;
    const { role } = req.body;

    const getUser = await Users.findOne(id);
    //########
    if (!getUser) {
      res.status(404).send({ message: `No User Found` });
    }
    //########
    const getRole = await Roles.findOne(role);
    //########
    if (!getRole) {
      res.status(404).send({ message: `No Role Found` });
    }

    let oldUserDetails = {
      firstname: getUser.firstname,
      lastname: getUser.lastname,
      username: getUser.username,
      email: getUser.email,
      address: getUser.address,
      phone: getUser.phone,
      country: getUser.country,
      state: getUser.state,
      postalcode: getUser.postalcode,
      password: getUser.hashedpass,
      roles: [...getUser.roles, getRole.RoleName],
    };
    //
    const updatedUser = await Users.findByIdAndUpdate(id, {
      $set: oldUserDetails,
    });

    //########
    res.status(200).send({ message: "Success", data: updatedUser });
  }
);

//#######################################################
//#######################################################
//#######################################################

//get friends
userRouter.get("/friends/:userId", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    const friends = await Promise.all(
      user.followings.map((friendId) => {
        return Users.findById(friendId);
      })
    );
    let friendList = [];
    friends.map((friend) => {
      const { _id, username, profilePicture } = friend;
      friendList.push({ _id, username, profilePicture });
    });
    res.status(200).json(friendList);
  } catch (err) {
    res.status(500).json(err);
  }
});
//#######################################################
//follow a user

userRouter.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await Users.findById(req.params.id);
      const currentUser = await Users.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({ $push: { followers: req.body.userId } });
        await currentUser.updateOne({ $push: { followings: req.params.id } });
        res.status(200).json("user has been followed");
      } else {
        res.status(403).json("you allready follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant follow yourself");
  }
});
//#######################################################
//unfollow a user

userRouter.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      const user = await Users.findById(req.params.id);
      const currentUser = await Users.findById(req.body.userId);
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({ $pull: { followers: req.body.userId } });
        await currentUser.updateOne({ $pull: { followings: req.params.id } });
        res.status(200).json("user has been unfollowed");
      } else {
        res.status(403).json("you dont follow this user");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("you cant unfollow yourself");
  }
});

module.exports = userRouter;
