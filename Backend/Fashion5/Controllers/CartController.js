const express = require("express");
const cartRouter = express.Router();
//
cartRouter.get("/getAllCart", async (req, res) => {});
//
cartRouter.get("/getCartById/:id", async (req, res) => {});

//
cartRouter.post("/createCart", async (req, res) => {});

//
cartRouter.patch("/updateCartById/:id", async (req, res) => {});

//
cartRouter.delete("/deleteCartById/:id", async (req, res) => {});

module.exports = cartRouter;
