const express = require("express");
const usersRouter = require("./Routes/users");
const categoryRouter = require("./Routes/category.js");
const productsRouter = require("./Routes/products");
const app = express();
const db = require("./Database/connection");
// require("express-async-errors");

//<----------- middlewares ---------------->
//use static files
app.use(express.static("./public"));
app.use(express.json());

//
app.get("/", (req, res) => {
  res.send(`<h2>Welcome to Fashion5</h3>`);
});

//#############################################################

//<----------- routes ---------------->
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/category", categoryRouter);

const port = process.env.PORT || 6800;

//#############################################################

//database check
const startDB = async () => {
  try {
    await db();
    //server connection
    app.listen(
      port,
      console.log(`Server is running on http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startDB();
