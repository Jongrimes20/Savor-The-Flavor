// Imports
require("dotenv").config();
const express = require("express");
// const { connect } = require("./routes/postRoutes");
const mysql = require("mysql2/promise");
const { connect } = require("./routes/postRoutes");
const app = express();
const PORT = process.env.PORT || 3000;
const PERMANENT_REDIRECT = 301;
const TEMPORARY_REDIRECT = 302;
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

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

app.get("/CustomerAccountManagement", async (req, res) => {
  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    const sql = "SELECT * FROM Customer_Information WHERE CUSTOMER_ID = ?";
    // Run your query
    const [rows, fields] = await connection.query(sql, [req.query.id]);
    res.render("CustomerAccountManagement", { customer: rows[0] });
  } catch (error) {
    // Handle errors
    throw error;
  } finally {
    // Release the connection back to the pool
    if (connection) {
      connection.release();
    }
  }
});

app.get("/CustomerHomepage", async (req, res) => {
  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    const sql = "SELECT * FROM Customer_Information WHERE CUSTOMER_ID = ?";
    // Run your query
    const [rows, fields] = await connection.query(sql, [req.query.id]);
    res.render("CustomerHomePage", { customer: rows[0] });
  } catch (error) {
    // Handle errors
    throw error;
  } finally {
    // Release the connection back to the pool
    if (connection) {
      connection.release();
    }
  }
});

app.get("/CustomerLogin", (req, res) => {
  res.render("CustomerLogin");
});

app.get("/CustomerLogin/:phNum/:pwd", async (req, res) => {
  let phNum = req.params.phNum;
  let pwd = req.params.pwd;
  let connection;
  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    const sql =
      "SELECT * FROM Customer_Information WHERE PHONE_NUMBER = ? AND CUSTOMER_PASSWORD = ?";
    // Run your query
    const [rows, fields] = await connection.query(sql, [phNum, pwd]);
    if (rows.length == 1) {
      res.redirect(`/CustomerHomepage?id=${rows[0].CUSTOMER_ID}`);
      return;
    } else {
      res.redirect("/CustomerLogin");
    }
    // Do something with the results
  } catch (error) {
    // Handle errors
    throw error;
  } finally {
    // Release the connection back to the pool
    if (connection) {
      connection.release();
    }
  }
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

app.get("/NewCustomer/:custName/:custPhNum/:custPwrd", async (req, res) => {
  let custName = req.params.custName;
  let custPhNum = req.params.custPhNum;
  let custPwrd = req.params.custPwrd;
  let connection;
  //try query
  try {
    connection = await pool.getConnection();
    const sql = "INSERT INTO CUSTOMER_INFORMATION(PHONE_NUMBER, CUSTOMER_NAME, CUSTOMER_PASSWORD) VALUES(?,?,?)";
    const[rows, fields] = connection.query(sql);
  
    res.redirect(`/CustomerHomepage?id=${rows[rows.length].CUSTOMER_ID}`);

  } catch(error) { //catch error
    throw error;
  } finally {
    //relase connection back to pool
    if (connection) {
      connection.release();
    }
  }
});

// Listen on port PORT
app.listen(PORT, async () => {
  console.info(`Listening on port ${PORT}`);
  // connection.connect(function (err) {
  //   if (err) throw err;
  //   console.log("Database connected!");
  // });
});
