const express = require("express");
require("dotenv").config();
const usersRouter = require("./Routes/users");
const categoryRouter = require("./Routes/category");
const productsRouter = require("./Routes/products");
const app = express();
const db = require("./Database/connection");
require("express-async-errors");

//<----------- middlewares ---------------->
//use static files
app.use(express.static("./public/images"));

//
app.get("/", (req, res) => {
  res.send(`<h2>Welcome to Fashion5 API</h3>`);
});
//#############################################################

app.use(express.json());

//#############################################################

//<----------- routes ---------------->
app.use("/fashion5/api/v1/products", productsRouter);
app.use("/fashion5/api/v1/users", usersRouter);
app.use("/fashion5/api/v1/category", categoryRouter);

const port = process.env.PORT || 6800;

//#############################################################

//database check
const startDB = async () => {
  try {
    await db(
      process.env.MONGO_DB_CONNECTION_STRING ||
        "mongodb://localhost:27017/Fashion5"
    );
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
