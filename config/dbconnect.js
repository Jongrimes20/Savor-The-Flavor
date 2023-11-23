const mysql = require("mysql");
//Connect to DB
const { createPool } = require("mysql");

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10, //max parallel connections
});

module.exports = pool;
// var connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// connection.connect(function (error) {
//   if (!!error) {
//     console.log(error);
//   } else {
//     console.log("connected!:)");
//   }
// });

// module.exports = connection;
