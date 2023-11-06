// App Logic for the Customer Account creation page
// Contains Customer class

class Customer {
  //class variables
  CustomerID;
  Name;
  Username;
  Password;
  PhoneNumber;
  Orders;

  //class constructor
  constructor(Name, PhoneNumber, Orders) {
    this.CustomerID = null;
    this.Name = Name;
    this.PhoneNumber = PhoneNumber;
    this.Orders = Orders;
  }
}

/*
Customer Account Creation function
gets info from Customer account creation form to create new Customer

To Pass data to customer homepage the new Customer object is added to the DB and then the customerID is passed as a URL Param 
the Customer honmepage then queries the customer info to set the active customer 
*/
function createAccount() {
  let customerName = document.getElementsByName("Name");
  let PhoneNumber = document.getElementsByName("PhoneNUmber");

  const newCustomer = new Customer(customerName, PhoneNumber);
  //add customer to database here

  //pass data to customer facing side here
}
