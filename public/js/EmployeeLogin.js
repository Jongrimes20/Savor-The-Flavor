/**
 * App logic for Employee Login Page
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
 * @param {*} EID - employeeID
 * @param {*} SSN - last 4 of employee social
 * 
 * TO-DO: How to pass the employee object to the next page
 */
function employeeLogin() {
    //get data from input fields
    const employee = queryEmployee(
        document.getElementById("EmployeeIDInput").value, 
        document.getElementById("EmployeeSSNInput").value
    )
    //pass to next page
}

function queryEmployee(EmpID, ssn) {
    //create new empty employee object
    var employee = new Employee();
    //connect to DB and query
    con.connect(function(err) {
        if (err) throw err;
        //write query here
        con.query(
            "SELECT * FROM EMPLOYEE WHERE EID = "+ EmpID + "AND SSN = " + ssn, 
            function (err, result, fields) {
            //handle error      
            if (err) throw err;
            //update the empty employee object
            employee.updateAllValuesFromQueryResult(result[0]);
        }); 
    });
    return employee;
}