class Order {
    customer;
    orderedItems;

    constructor(customer, orderedItems) {
        this.customer = customer;
        this.orderedItems = orderedItems;
    }

    addToOrder(menuItem) {
        this.orderedItems.push(menuItem);
        // TODO: send to db
    }
}