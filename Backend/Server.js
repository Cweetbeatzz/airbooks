import express from "express";

const app = express();

//
app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(5000, () => {
  console.log("Server Running on http://localhost:5000");
});
