// App Logic for the Customer Account creation page
// Contains Customer class

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

/**
 *
 * @param {*} PhoneNumber customer phone number
 * @param {*} Password customer password
 */
function queryCustomerFromLogIn(PhoneNumber, Password) {
  //create empty customer object
  var customer = new Customer();

  //connect to DB and query
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
  return customer;
}
