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
