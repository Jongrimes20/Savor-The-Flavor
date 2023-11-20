class CustomerTransaction {
    transactionId;
    customerId;
    totalCost;
    waiterId;

    constructor(transactionId, totalCost) {
        this.transactionId = transactionId;
        this.totalCost = totalCost;
        this.customerId = null;
        this.waiterId = null;
    }
    
    constructor(transactionId, customerId, totalCost, waiterId) {
        this.transactionId = transactionId;
        this.customerId = customerId;
        this.totalCost = totalCost;
        this.waiterId = waiterId;
    }
}