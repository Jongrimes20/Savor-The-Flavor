/**
 * Customer Login JS file
 * Jon Grimes   11/18
 */
//Connect to DB
const con = mysql.createConnection({
    host: 'localhost',
    user: 'Jon',
    password: 'june1401',
    database: 'Savor_The_Flavor'
});

/**
 * 
 * @param {*} PhoneNumber customer phone number
 * @param {*} Password customer password
 * 
 * QUESTION - Do we return customer object or just the result?
 */
function queryCustomerResultsFromLogin(PhoneNumber, Password) {
    //create empty customer object
    var customer = new Customer();

    //connect to DB and query
    con.connect(function(err) {
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
            "SELECT * FROM Customer_Information WHERE PHONE_NUMBER = " + PhoneNumber + "AND CUSTOMER_PASSWORD = " + Password, 
            function (err, result, fields) {
            //handle error      
            if (err) throw err;
            /**
             * Create Customer object from info from just CUSTOMER_INFORMATION
             * Then, call `loadOrders(CustomerID)` to load the customers orders
             */
            return result[0];
        }); 
    });
}

//Used to load 
function loadCustomerOrder(CustomerID) {
    con.connect(function(err) {
        if (err) throw err;
        //query here
        con.query("", function (err, result, fields) {
          if (err) throw err;
          //Handle results here
        });
      });
}
