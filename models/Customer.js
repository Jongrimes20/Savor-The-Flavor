const db = require("../config/dbconnect.js");
// Contains Customer class
class Customer {
  //class variables
  CustomerID; //Int
  Name; //String
  Password; //String
  PhoneNumber; //String
  Orders; //Array of Ints pointing to OrderID's

  //class constructor
  constructor(Name, PhoneNumber, Password, Orders) {
    this.Name = Name;
    this.PhoneNumber = PhoneNumber;
    this.Password = Password;
    this.Orders = Orders;
  }

  updateFromCustomerInformation(result) {
    this.CustomerID = result.CUSTOMER_ID;
    this.Name = result.CUSTOMER_NAME;
    this.PhoneNumber = result.PHONE_NUMBER;
    this.Password = result.CUSTOMER_PASSWORD;
  }
}
