// Imports
require("dotenv").config();
// const entities = require("entities");
const express = require("express");
// const { connect } = require("./routes/postRoutes");
const mysql = require("mysql2/promise");
// const { connect, search } = require("./routes/postRoutes");
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
app.use("/css", express.static(__dirname + "/public/css"));
app.use("/js", express.static(__dirname + "/public/js"));
app.use("/img", express.static(__dirname + "/public/img"));
app.use("/models", express.static("models"));
app.use("/config", express.static("config"));
// app.use("/posts", require("./routes/postRoutes"));

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
    // console.log("PIECE OUT!" + req.query.id + rows);
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

app.get("/CustomerAccountManagement/:id", async (req, res) => {
  console.log("POOL");
  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    const sql = "SELECT * FROM Customer_Information WHERE CUSTOMER_ID = ?";
    // Run your query
    const [rows, fields] = await connection.query(sql, [req.params.id]);
    // console.log("PIECE OUT!" + req.query.id + rows);
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

app.get(
  "/CustomerAccountManagement/:custId/:custName/:custPhNum/:custPwrd",
  async (req, res) => {
    let custId = req.params.custId;
    let custName = req.params.custName;
    let custPhNum = req.params.custPhNum;
    let custPwrd = req.params.custPwrd;
    let connection;
    console.log(req.params);
    try {
      connection = await pool.getConnection();
      const sql =
        "UPDATE CUSTOMER_INFORMATION SET CUSTOMER_NAME = ?, PHONE_NUMBER = ?, CUSTOMER_PASSWORD = ? WHERE CUSTOMER_ID = ?";
      await connection.query(sql, [custName, custPhNum, custPwrd, custId]);
    } catch (error) {
      throw error;
    } finally {
      connection.release();
    }
    //query works
    //should just essentially reload the page with new info
    // console.log("POSTTING");
    res.redirect(`/CustomerAccountManagement/${custId}`);
  }
);

app.get("/CustomerHomepage", async (req, res) => {
  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    const sql = "SELECT * FROM Customer_Information WHERE CUSTOMER_ID = ?";
    // Run your query
    const [rows, fields] = await connection.query(sql, [req.query.id]);
    if (rows.length == 1) {
      res.render("CustomerHomepage", { customer: rows[0] });
    } else {
      res.redirect("/CustomerLogin");
    }
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

app.get("/CustomerHomepage/:custId", async (req, res) => {
  try {
    let custId = req.params.custId;
    // Get a connection from the pool
    connection = await pool.getConnection();
    const sql = "SELECT * FROM Customer_Information WHERE CUSTOMER_ID = ?";
    // Run your query
    const [rows, fields] = await connection.query(sql, [custId]);
    console.log("IT WORKS IN HERE");
    res.render("CustomerHomepage", { customer: rows[0] });
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

// app.get("/CustomerOrderCreation", async (req, res) => {
//   // console.log("COID: " + req.query.id);
//   try {
//     // Get a connection from the pool
//     connection = await pool.getConnection();
//     const sql = "SELECT * FROM Customer_Information WHERE CUSTOMER_ID = ?";
//     // Run your query
//     const [rows, fields] = await connection.query(sql, [req.query.id]);
//     res.render("CustomerOrderCreation", { customer: rows[0], url: "start" });
//   } catch (error) {
//     // Handle errors
//     throw error;
//   } finally {
//     // Release the connection back to the pool
//     if (connection) {
//       connection.release();
//     }
//   }
// });

app.get("/CustomerOrderHistoryDelete", async (req, res) => {
  console.log("DELETE ORDERS");
  try {

     // Get a connection from the pool
     connection = await pool.getConnection();

     var sql = "SELECT * FROM CUSTOMER_INFORMATION WHERE CUSTOMER_ID = ?";
     const [d, _y] = await connection.query(sql, [req.query.id]);

     sql = "DELETE FROM CUSTOMER_ORDERED_ITEMS WHERE CUSTOMER_ID = ?";
     await connection.query(sql, [req.query.id]);

     sql =
       "SELECT MENU_ITEM_ID FROM CUSTOMER_ORDERED_ITEMS WHERE CUSTOMER_ID = ?";
     //"SELECT * FROM Customer_Information WHERE CUSTOMER_ID = ?";
     // Run your query
     const [rows, fields] = await connection.query(sql, [req.query.id]);
     var e = [];

     /*
     for (var i = 0; i < rows.length; i++) {
      sql = "SELECT MENU_ITEM_NAME FROM MENU_ITEMS WHERE MENU_ITEM_ID = ?";
      const [menuName, _x] = await connection.query(sql, [
        rows[i].MENU_ITEM_ID,
      ]);
      e.push(menuName[0].MENU_ITEM_NAME);
    }
    */
    if ( rows.length == 0 ) {
      console.log("PIECE OUT!" + "  No Menu Items" );
    }
    else {
      console.log("PIECE OUT!" + JSON.stringify(rows) + "\n" + e);
    }

    res.render("CustomerOrderHistory", {
      customer: d[0],
      len: e,
      url: "saved",
    });

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


app.get("/CustomerOrderHistory", async (req, res) => {
  console.log("POOL");
  try {
    // Get a connection from the pool
    connection = await pool.getConnection();

    var sql = "SELECT * FROM CUSTOMER_INFORMATION WHERE CUSTOMER_ID = ?";
    const [d, _y] = await connection.query(sql, [req.query.id]);

    sql =
      "SELECT MENU_ITEM_ID FROM CUSTOMER_ORDERED_ITEMS WHERE CUSTOMER_ID = ?";
    //"SELECT * FROM Customer_Information WHERE CUSTOMER_ID = ?";
    // Run your query
    const [rows, fields] = await connection.query(sql, [req.query.id]);
    var e = [];
    for (var i = 0; i < rows.length; i++) {
      sql = "SELECT MENU_ITEM_NAME FROM MENU_ITEMS WHERE MENU_ITEM_ID = ?";
      const [menuName, _x] = await connection.query(sql, [
        rows[i].MENU_ITEM_ID,
      ]);
      e.push(menuName[0].MENU_ITEM_NAME);
    }
    // rows.array.forEach((element) => {
    //   e += element + "\n";
    // });
    console.log("PIECE OUT!" + JSON.stringify(rows) + "\n" + e);
    res.render("CustomerOrderHistory", {
      customer: d[0],
      len: e,
      url: "list",
    });
  } catch (error) {
    // Handle errors
    throw error;
  } finally {
    // Release the connection back to the pool
    if (connection) {
      connection.release();
    }
  }
  // res.render("CustomerOrderHistory");
});

app.get("/CustomerOrderHistory/:jsonObj", async (req, res) => {
  // console.log("POOL");
  // TODO
  // try {
  //   // Get a connection from the pool
  //   connection = await pool.getConnection();
  //   const sql = "SELECT * FROM Customer_Information WHERE CUSTOMER_ID = ?";
  //   // Run your query
  //   const [rows, fields] = await connection.query(sql, [req.query.jsonObj]);
  //   // console.log("PIECE OUT!" + req.query.id + rows);
  //   res.render("CustomerOrderHistory", { customer: rows[0] });
  // } catch (error) {
  //   // Handle errors
  //   throw error;
  // } finally {
  //   // Release the connection back to the pool
  //   if (connection) {
  //     connection.release();
  //   }
  // }
  // res.render("CustomerOrderHistory");
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
    //Insert into DB
    let sql = "SELECT * FROM CUSTOMER_INFORMATION";
    const [def, _] = await connection.query(sql);
    sql =
      "SELECT CUSTOMER_ID FROM CUSTOMER_INFORMATION WHERE CUSTOMER_NAME = ?";
    const [invalid, __] = await connection.query(sql, [custName]);

    if (invalid.length != 0) {
      res.redirect("/NewCustomer?id=invalid");
    } else {
      let cid = def[def.length - 1].CUSTOMER_ID + 1;
      sql =
        "INSERT INTO CUSTOMER_INFORMATION(PHONE_NUMBER, CUSTOMER_NAME, CUSTOMER_PASSWORD, CUSTOMER_ID) VALUES(?,?,?,?)";
      await connection.query(sql, [custPhNum, custName, custPwrd, cid]);

      //Retrieve newley added account
      const sql2 =
        "SELECT * FROM CUSTOMER_INFORMATION WHERE PHONE_NUMBER = ? AND CUSTOMER_PASSWORD =?";
      const [rows, fields] = await connection.query(sql2, [
        custPhNum,
        custPwrd,
      ]);

      console.log(rows[0]);
      res.redirect(`/CustomerHomepage?id=${rows[rows.length - 1].CUSTOMER_ID}`);
      return;
    }
  } catch (error) {
    //catch error
    // throw error;
    res.redirect("/NewCustomer?id=toolong");
  } finally {
    //relase connection back to pool
    if (connection) {
      connection.release();
    }
  }
});

app.get("/CustomerOrderCreation/:customerID/:menuItem", async (req, res) => {
  console.log("COID2: " + req.query.id);
  let customerID = req.params.customerID;
  let menuItem = req.params.menuItem;
  // console.log("CUSTOMER NAME: " + customerName);
  let connection;
  try {
    connection = await pool.getConnection();
    const sqlMenuItemID =
      "SELECT MENU_ITEM_ID FROM MENU_ITEMS WHERE MENU_ITEM_NAME = ?";

    const [rows, fields] = await connection.query(sqlMenuItemID, [menuItem]);

    if (rows.length != 1) {
      res.render("CustomerOrderCreation", { customer: rows[0], url: "start" });
    } else {
      // console.log("MENU_ITEM_ID FROM sqlMenuItemID: " + rows[0].MENU_ITEM_ID);
      // console.log(rows);
      const sqlCustomerID =
        "SELECT CUSTOMER_ID FROM CUSTOMER_INFORMATION WHERE CUSTOMER_ID = ?";
      const [rows1, fields1] = await connection.query(sqlCustomerID, [
        customerID,
      ]);
      if (rows1.length == 1) {
        // console.log("CUSTOMER_ID: " + rows1[0].CUSTOMER_ID);

        const searchDuplicate =
          "SELECT * FROM CUSTOMER_ORDERED_ITEMS WHERE CUSTOMER_ID = ? AND MENU_ITEM_id = ?";
        const [duprows, _] = await connection.query(searchDuplicate, [
          rows1[0].CUSTOMER_ID,
          rows[0].MENU_ITEM_ID,
        ]);
        if (duprows.length == 0) {
          const sqlInsertCustomerOrder =
            "INSERT INTO CUSTOMER_ORDERED_ITEMS (CUSTOMER_ID, MENU_ITEM_ID) VALUES(?, ?)";
          try {
            await connection.query(sqlInsertCustomerOrder, [
              rows1[0].CUSTOMER_ID,
              rows[0].MENU_ITEM_ID,
            ]);
          } catch (err) {
            console.log("ERROR CAUGHT");

            return;
          }
          res.render("CustomerOrderCreation", {
            customer: rows[0],
            url: "saved",
          });
        } else if (duprows.length >= 1) {
          res.render("CustomerOrderCreation", {
            customer: rows[0],
            url: "duplicate",
          });
        }
      } else {
        res.render("CustomerOrderCreation", {
          customer: rows[0],
          url: "NOTFOUND",
        });
      }
    }

    return;
  } catch (error) {
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
});

app.get("/CustomerOrderCreation/:orderStatus", async (req, res) => {
  // console.log("COID: 3" + req.query.id);
  // section back to the pool
  try {
    // Get a connection from the pool
    connection = await pool.getConnection();
    const sql = "SELECT * FROM Customer_Information WHERE CUSTOMER_ID = ?";
    // Run your query
    const [rows, fields] = await connection.query(sql, [req.query.id]);
    // console.log("PIECE OUT!" + req.query.id + rows);
    res.render("CustomerOrderCreation", {
      customer: rows[0],
      url: req.params.orderStatus,
    });
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

app.get("/path-to-testing", async (req, res) => {
  try {
    const result = await testing(); // Call your testing function
    res.json(result); // Send the result back to the client
  } catch (error) {
    console.error("Error in testing function:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Listen on port PORT
app.listen(PORT, async () => {
  console.info(`Listening on port ${PORT}`);
});
