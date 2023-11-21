//run this in terminal using "node DBConnection.js" to make sure you have connected to your mySQL database
//if it throws errors look up the error to see how to properly flush priveleges

var mysql = require("mysql");

//fill in these values with your own info
var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "databasename",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
