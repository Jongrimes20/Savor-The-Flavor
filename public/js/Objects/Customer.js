/**
 * Customer Class
 * Jon Grimes 11/18/23
 */

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
    this.CustomerID = null;
    this.Name = Name;
    this.PhoneNumber = PhoneNumber;
    this.Password = Password;
    this.Orders = Orders;
  }

  // //empty constructor
  // constructor() {
  //     this.CustomerID = null;
  //     this.Name = null;
  //     this.PhoneNumber = null;
  //     this.Password = null;
  //     this.Orders = null;
  // }

  updateFromCustomerInformation(result) {
    this.CustomerID = result.CUSTOMER_ID;
    this.Name = result.CUSTOMER_NAME;
    this.PhoneNumber = result.PHONE_NUMBER;
    this.Password = result.CUSTOMER_PASSWORD;
  }
}

export default Customer;
