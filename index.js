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

// Connect to mongodb
mongoose
  .connect(
    `mongodb+srv://shafihumustapha0101:n95em7sHpSUiRDLp@backenddb.ajrpd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`
  )
  .then(() => {
    console.log("Database Connected!");

    // Initialize Server
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => console.log("Connection Failed!"));
