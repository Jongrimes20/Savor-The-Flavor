const Customer = require("./../../models/Customer.js");

function queryCustomerResultsFromLogin(PhoneNumber, Password) {
  if (PhoneNumber == "" || Password == "") return null;
  
}

window.queryCustomerResultsFromLogin = queryCustomerResultsFromLogin;
