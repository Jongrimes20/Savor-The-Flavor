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

import Customer from "./../../models/Customer.js";
// import pool from "./../../config/dbconnect.js";

// import Customer from "./objects/Customer.js";

function queryCustomerResultsFromLogin(PhoneNumber, Password) {
  if (PhoneNumber == "" || Password == "") return null;
  //create empty customer object
  var customer = new Customer("Jon Keats", PhoneNumber, Password, "");

  return customer;
}

window.queryCustomerResultsFromLogin = queryCustomerResultsFromLogin;
