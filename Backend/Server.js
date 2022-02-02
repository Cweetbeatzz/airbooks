import express from "express";

const app = express();

//#########################################################

app.get("/", (req, res) => {
  res.send("Server is Running");
});
//#########################################################

const port = process.env.PORT || 5000;

//#########################################################

app.listen(5000, () => {
  console.log(`Server Running on ${port}`);
});
