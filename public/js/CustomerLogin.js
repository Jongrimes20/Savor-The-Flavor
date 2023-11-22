const Customer = require("./../../models/Customer.js");

function queryCustomerResultsFromLogin(PhoneNumber, Password) {
  if (PhoneNumber == "" || Password == "") return null;
  //create empty customer object
  var customer = new Customer("Jon Keats", PhoneNumber, Password, "");

  return customer;
}

window.queryCustomerResultsFromLogin = queryCustomerResultsFromLogin;
