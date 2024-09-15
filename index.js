require("dotenv").config(); // Load .env variables

const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const app = express();

//Middleware to allow  use of json with express
app.use(express.json());

//Middleware allow use of forms with express
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Updated");
});

const mongoURI = process.env.MONGO_URI;

// Connect to mongodb
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Database Connected!");

    // Initialize Server
    app.listen(process.env.PORT | 3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => console.log("Connection Failed!"));
