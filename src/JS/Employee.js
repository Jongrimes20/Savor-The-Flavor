class Employee {
    eid;
    ssn;
    position;
    sex;
    name;
    phoneNumber;
    address;

    constructor(eid, ssn, name) {
        this.eid = eid;
        this.ssn = ssn;
        this.name = name;
        this.position = null;
        this.sex = null;
        this.phoneNumber = null;
        this.address = null;
    }

    constructor(eid, ssn, position, sex, name, phoneNumber, address) {
        this.eid = eid;
        this.ssn = ssn;
        this.name = name;
        this.position = position;
        this.sex = sex;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}