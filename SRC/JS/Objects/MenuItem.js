class MenuItem {
    itemId;
    name;
    cost;

    constructor(itemId, name) {
        this.itemId = itemId;
        this.name = name;
        this.cost = 20.00;  // default value
    }

    constructor(itemId, name, cost) {
        this.itemId = itemId;
        this.name = name;
        this.cost = cost;
    }
        
}