/**
 * Order object class
 * Jon Grimes 11/18/23
 */

class Order {
    transactionID;
    customerID;
    totalCost;
    menuItems;

    constructor(transactionID, customerID, totalCost, menuItems) {
        this.transactionID = transactionID;     //int
        this.customerID = customerID;           //int
        this.totalCost = totalCost;             //double
        this.menuItems = menuItems;             //array of item objects
    }
}