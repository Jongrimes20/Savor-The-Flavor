
//Employee Class
class Employee {
    employeeID;
    ssn;
    position;
    sex;
    employeeName;
    phoneNumber;
    address;

    //Constructors
    constructor(employeeID, ssn, position, sex, employeeName, phoneNumber, address) {
        this.employeeID = employeeID;
        this.ssn = ssn;
        this.position = position;
        this.sex = sex;
        this.employeeName = employeeName;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }

    constructor() {
        this.employeeID = null;
        this.ssn = null;
        this.position = null;
        this.sex = null;
        this.employeeName = null;
        this.phoneNumber = null;
        this.address = null;
    }

    updateAllValuesFromQueryResult(result) {
        this.employeeID = result.EID;
        this.ssn = result.SSN;
        this.position = result.POSITION;
        this.sex = result.SEX;
        this.employeeName = result.EMPLOYEE_NAME;
        this.phoneNumber = result.PHONE_NUMBER;
        this.address = result.ADDRESS;
    }

}