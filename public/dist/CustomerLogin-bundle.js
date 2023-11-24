(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// const pool = require("../config/dbconnect.js");

// Contains Customer class
class Customer {
  //class variables
  PhoneNumber; //String
  Orders; //Array of Ints pointing to OrderID's

  //class constructor
  constructor(phNum, pwd) {
    this.PhoneNumber = phNum;
    this.Password = pwd;
  }

  // static checkPhoneNumber(phNum, callback) {
  //   var sql = `SELECT * FROM CUSTOMER_INFORMATION WHERE PHONE_NUMBER=${phNum}`;
  //   // pool.query(sql, (err, res, fields) => {
  //   //   if (err) {
  //   //     console.log(err);
  //   //   }
  //   //   return "YOO" + customer.updateFromCustomerInformation(res[0]);
  //   // });
  //   return sql;
  // }

  updateFromCustomerInformation(result) {
    this.CustomerID = result.CUSTOMER_ID;
    this.Name = result.CUSTOMER_NAME;
    this.PhoneNumber = result.PHONE_NUMBER;
    this.Password = result.CUSTOMER_PASSWORD;
  }
}

module.exports = Customer;

},{}],2:[function(require,module,exports){
const Customer = require("./../../models/Customer.js");

function queryCustomerResultsFromLogin(PhoneNumber, Password) {
  if (PhoneNumber == "" || Password == "") return null;
  
}

window.queryCustomerResultsFromLogin = queryCustomerResultsFromLogin;

},{"./../../models/Customer.js":1}]},{},[1,2]);
