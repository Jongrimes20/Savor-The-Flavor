const mysql = require("mysql2/promise");

async function testing() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  var connection = await pool.getConnection();

  const sql = "SELECT * FROM Customer_Information WHERE CUSTOMER_ID = ?";
  const [rows, fields] = await connection.query(sql, [req.query.id]);
  return rows;
}

window.testing = testing;
