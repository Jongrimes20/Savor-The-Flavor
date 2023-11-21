// import Customer from "./Customer";
/**
 *
 * @param {*} PhoneNumber customer phone number
 * @param {*} Password customer password
 */
function queryCustomerFromLogIn(PhoneNumber, Password) {
  document.getElementById("backbtn").innerHTML = "This is the " + Password;
  // create empty customer object
  var customer = new Customer();
  //connect to DB and query
  var con = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
  });
  con.connect(function (err) {
    if (err) throw err;
    //write query here
    con.query(
      //QUERY - NOT FINISHED
      /**
       * Need to Join CUSTOMER_INFORMATION, CUSTOMER_TRANSACTIONS, and CUSTOMER_ORDERED_ITEMS
       * From CUSTOMER_INFORMATION we get:
       * - CUSTOMER_ID
       * - PHONE_NUMBER
       * - PASSWORD
       * Then, We Join CUSTOMER_TRANSACTIONS and CUSTOMER_ORDERED_ITEMS to query the customer order history
       */
      "SELECT * FROM Customer_Information WHERE PHONE_NUMBER = " +
        PhoneNumber +
        "AND CUSTOMER_PASSWORD = " +
        Password,
      function (err, result, fields) {
        //handle error
        if (err) throw err;
        /**
         * Create Customer object from info from just CUSTOMER_INFORMATION
         * Then, call `loadOrders(CustomerID)` to load the customers orders
         */
        customer.updateFromCustomerInformation(result[0]);
        //finsih later
        // loadCustomerOrder(customer.CustomerID);
      }
    );
  });
  document.getElementById("backbtn").innerHTML = "STATUS!";
  return customer;
}
