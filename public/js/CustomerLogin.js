const Customer = require("./../../models/Customer.js");

function queryCustomerResultsFromLogin(PhoneNumber, Password) {
  if (PhoneNumber == "" || Password == "") return null;
  //create empty customer object
  // var customer = new Customer(PhoneNumber, Password);
  // return Customer.checkPhoneNumber(PhoneNumber, function (err, res) {
  //   if (err) {
  //     console.error('Error:', err);
  //   } else {
  //     console.log('Result:', result);
  //   }
  // });
}

window.queryCustomerResultsFromLogin = queryCustomerResultsFromLogin;
