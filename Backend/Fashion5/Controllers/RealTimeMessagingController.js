const express = require("express");
const MessagingRouter = express.Router();
const socket = require("socket.io");
const server = require("../app");

//SOCKET.IO CONFIG
const io = socket(server);

io.on("connection", (client) => {
  // console.log("connected", client.id);
  //##################

  //broadcasting message to only a specific user
  client.emit("message", "Welcome to Fashion5 Customer Care");

  //broadcasting message when a user connects
  client.broadcast.emit("message", "A user has joined the group");

  client.on("disconnect", () => {
    io.emit("message", "A user has left the group");
  });

  //listen for imcoming message from client
  client.on("chat", (msg) => {
    console.log(msg);

    //################################################
    //show message to everybody
    client.emit("message", msg);

    //################################################
    //show message to only a user
    io.emit("message", msg);
  });

  //##################
  //broadcasting message to every user
  // io.emit("event", (data) => {});
  // io.emit("disconnect", () => {});
  //##################
});
