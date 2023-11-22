class Menu {
    menuItems;

    constructor (menuItems) {
        this.menuItems = menuItems;
    }

    addMenuItem(item) {
        this.menuItems.push(item);
        // TODO: send to db
    }

}