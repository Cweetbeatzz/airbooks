import express from "express";
import db from "";

const app = express();

//get all products
app.get("api/products", (req, res) => {
  res.send(db.products);
});

//get products by id
app.get("api/products/:id", (req, res) => {
  const productById = db.products.find((x) => x.id === req.params.id);
  //
  if (productById) {
    res.send(productById);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});
//delete products by id
app.delete("api/products/delete:id", (req, res) => {
  const productById = db.products.find((x) => x.id === req.params.id);
  //
  if (productById) {
    res.send(productById);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});

//update products by id
app.put("api/products/update:id", (req, res) => {
  const productById = db.products.find((x) => x.id === req.params.id);
  //
  if (productById) {
    res.send(productById);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});
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
