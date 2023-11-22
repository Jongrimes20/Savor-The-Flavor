// Imports
require("dotenv").config();
const connection = require("./config/dbconnect");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Static Files
app.use(express.json());
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/models", express.static("models"));
app.use("/config", express.static("config"));
app.use("/posts", require("./routes/postRoutes"));

// Global Error Handler.
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went really wrong",
  });
});

// Set Views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.render("index");
});
app.get("/CustomerAccountManagement", (req, res) => {
  res.render("CustomerAccountManagement");
});
app.get("/CustomerHomepage", (req, res) => {
  res.render("CustomerHomepage");
});
app.get("/CustomerLogin", (req, res) => {
  res.render("CustomerLogin");
});
app.get("/CustomerOrderCreation", (req, res) => {
  res.render("CustomerOrderCreation");
});
app.get("/CustomerOrderHistory", (req, res) => {
  res.render("CustomerOrderHistory");
});

app.get("/EmployeeLogin", (req, res) => {
  res.render("EmployeeLogin");
});

app.get("/InventoryManagement", (req, res) => {
  res.render("InventoryManagement");
});

app.get("/NewCustomer", (req, res) => {
  res.render("NewCustomer");
});

// Listen on port 3000
app.listen(PORT, async () => {
  console.info(`Listening on port ${PORT}`);
});
