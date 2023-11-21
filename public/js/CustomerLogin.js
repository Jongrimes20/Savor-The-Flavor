/**
 * Customer Login JS file
 * Jon Grimes   11/18
 */
//Connect to DB
// console.log("DONE!");
// import { createPool } from "../../node_modules/mysql";

// const pool = createPool({
//   host: "localhost",
//   user: "Jon",
//   password: "june1401",
//   database: "Savor_The_Flavor",
//   connectionLimit: 10, //max parallel connections
// });

// /**
//  *
//  * @param {*} PhoneNumber customer phone number
//  * @param {*} Password customer password
//  *
//  * QUESTION - Do we return customer object or just the result?
//  */

import Customer from "./Objects/Customer.js";

function queryCustomerResultsFromLogin(PhoneNumber, Password) {
  //create empty customer object
  var customer = new Customer("Jon Keats", PhoneNumber, Password, "");
  //query from pool
  //   pool.query(
  //     "SELECT * FROM Customer_Information WHERE PHONE_NUMBER = " +
  //       PhoneNumber +
  //       "AND CUSTOMER_PASSWORD = " +
  //       Password,
  //     (err, results, fields) => {
  //       if (err) {
  //         console.log(err);
  //       }
  //       customer.updateFromCustomerInformation(results[0]);
  //     }
  //   );
  return null; // customer;
}

window.queryCustomerResultsFromLogin = queryCustomerResultsFromLogin;
