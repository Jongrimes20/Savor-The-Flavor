# POPULATE EMPLOYEE TABLE
INSERT INTO
    EMPLOYEE(
        EID,
        SSN,
        POSITION,
        SEX,
        EMPLOYEE_NAME,
        PHONE_NUMBER,
        ADDRESS
    )
VALUES
    (
        1,
        "711161406",
        "Owner",
        "M",
        "John Doe",
        "7138321234",
        "123 Comet Avenue, Richardson, TX 75080"
    ),
    (
        2,
        "787054902",
        "Manager",
        "M",
        "Brandon West",
        "6232450982",
        "8697 Tarkiln Hill Street, Sugar Land, TX 77478"
    ),
    (
        3,
        "818325099",
        "Bartender",
        "M",
        "Alex Lowe",
        "5218468484",
        "136 Bradford Street, Rosenberg, TX 77471"
    ),
    (
        4,
        "433737553",
        "Waiter",
        "M",
        "Ben Frazier",
        "6618649433",
        "43 Lake Forest Lane, Dallas, TX 75234"
    ),
    (
        5,
        "140427513",
        "Cashier",
        "M",
        "Andre Owens",
        "7015023741",
        "778 Broad Street, San Antonio, TX 78207"
    ),
    (
        6,
        "926004287",
        "Manager",
        "F",
        "Sydney Williams",
        "8305294304",
        "7679 High Street, Laredo, TX 78041"
    ),
    (
        7,
        "360334300",
        "Waiter",
        "F",
        "Isabel Sampson",
        "6174934834",
        "15 Brewery Street, Allen, TX 75002"
    ),
    (
        8,
        "731575038",
        "Waiter",
        "F",
        "Ellen McIntosh",
        "3527419526",
        "6 Helen Lane, Longview, TX 75604"
    ),
    (
        9,
        "127016672",
        "Cashier",
        "F",
        "Sarah Hicks",
        "8788918433",
        "5 Glenridge Street, Spring, TX 77373"
    ),
    (
        10,
        "065532875",
        "Waiter",
        "F",
        "Carlie Gardner",
        "3862018826",
        "8175 Kirkland Court, San Juan, TX 78589"
    );

#POPULATE SUPPLIERS TABLE
INSERT INTO
    SUPPLIERS(
        SUPPLIER_ID,
        SUPPLIER_NAME,
        SUPPLIER_ADDRESS,
        SUPPLIER_PHONE_NUMBER
    )
VALUES
    (
        10,
        "Sam's Club",
        "100 Waterview Parkway, Richardson, TX 75080",
        "8504508080"
    ),
    (
        20,
        "Luigi's Italian Ingredients",
        "444 Frankford Street, Richardson, TX, 75080",
        "5058084322"
    ),
    (
        90,
        "Mable's Creamery",
        "8448 Independence Road, Frisco, TX, 75035",
        "3438134333"
    );

# POPULATE INVENTORY TABLE
INSERT INTO
    INVENTORY(
        INVENTORY_ITEM_ID,
        INVENTORY_ITEM_NAME,
        COUNT,
        SUPPLIER_ID
    )
VALUES
    (100, "Chicken Breast", 50, 10),
    (101, "Ground Beef", 45, 10),
    (200, "Parmesan Cheese", 10, 10),
    (201, "Lettuce", 14, 10),
    (202, "White Mushroom", 40, 10),
    (500, "Fettuccine Pasta", 35, 20),
    (501, "Spaghetti Pasta", 25, 20),
    (600, "Tomato Basil Sauce", 18, 20),
    (601, "Alfredo Sauce", 20, 20),
    (602, "Marsala Sauce", 30, 20),
    (900, "Vanilla Ice Cream", 50, 90);

# POPULATE MENU TABLE
INSERT INTO
    MENU_ITEMS(MENU_ITEM_ID, MENU_ITEM_NAME, COST)
VALUES
    (
        1,
        "Chicken Alfredo",
        22.00
    ),
    (2, "Salad", 8.00),
    (
        3,
        "Spaghetti and Meatballs",
        16.00
    ),
    (
        4,
        "Chicken Parmesan",
        25.00
    ),
    (
        5,
        "Chicken Marsala",
        24.00
    ),
    (
        10,
        "Vanilla Ice Cream",
        6.00
    );

# POPULATE MENU_ITEMS_INGREDIENTS_LIST TABLE
INSERT INTO
    MENU_ITEMS_INGREDIENTS_LIST(MENU_ITEM_ID, INGREDIENT)
VALUES
    (
        1,
        "Chicken Breast, Fettuccine Pasta, Alfredo Sauce"
    ),
    (
        2,
        "Lettuce, White Mushroom"
    ),
    (
        3,
        "Ground Beef, Spaghetti Pasta, Tomato Basil Sauce"
    ),
    (
        4,
        "Chicken Breast, Parmesan Cheese, Tomato Basil Sauce"
    ),
    (
        5,
        "Chicken Breast, White Mushroom, Marsala Sauce"
    ),
    (10, "Vanilla Ice Cream");

# POPULATE CUSTOMERS_INFORMATION TABLE
INSERT INTO
    CUSTOMER_INFORMATION(
        CUSTOMER_ID,
        PHONE_NUMBER,
        CUSTOMER_NAME,
        CUSTOMER_PASSWORD
    )
VALUES
    (1, "7131234567", "Eugene McDermott", "password"),
    (2, "7137654321", "Tom Brady", "apple123"),
    (3, "8322387130", "Mariah Carey", "mariahCarey"),
    (4, "8789098877", "Jalal Omer", "dbadmin-1"),
    (5, "6550990777", "Temoc", "123@password.com"),
    (6, "3224556566", "Selena Gomez", "gomez32");

# POPULATE CUSTOMER_TRANSACTIONS TABLE
INSERT INTO
    CUSTOMER_TRANSACTIONS(
        CUSTOMER_TRANSACTION_ID,
        CUSTOMER_ID,
        CUSTOMER_TOTAL_COST,
        WAITER_ID
    )
VALUES
    (10001, 1, 49.00, 4),
    (10002, 2, 30.00, 4),
    (10003, 5, 14.00, 7),
    (10004, 3, 22.00, 8),
    (10005, 5, 47.00, 8),
    (10006, 6, 6.00, 7),
    (10007, 6, 16.00, 4),
    (10008, 4, 49.00, 4),
    (10009, 5, 28.00, 4),
    (10010, 5, 25.00, 8);

# POPULATE CUSTOMER_ORDERED_ITEMS TABLE
INSERT INTO
    CUSTOMER_ORDERED_ITEMS(CUSTOMER_ID, MENU_ITEM_ID)
VALUES
    (1, 4),
    (1, 5),
    (2, 5),
    (3, 2),
    (4, 4),
    (4, 5),
    (5, 2),
    (5, 10),
    (5, 1),
    (5, 4);

# POPULATE SUPPLIERS TABLE
# POPULATE SUPPLIER_TRANSACTIONS TABLE
INSERT INTO
    SUPPLIER_TRANSACTIONS(
        SUPPLIER_ID,
        SUPPLIER_TRANSACTION_ID,
        SUPPLIER_TOTAL_COST
    )
VALUES
    (10, 90001, 525.87),
    (20, 90002, 350.50),
    (20, 90003, 233.88),
    (90, 90004, 85.00),
    (10, 90005, 740.50),
    (10, 90006, 230.00),
    (20, 90007, 332.85),
    (20, 90008, 110.00),
    (90, 90009, 100.00),
    (20, 90010, 435.60);

# POPULATE COMPANY_ORDERED_ITEMS TABLE
INSERT INTO
    COMPANY_ORDERED_ITEMS(
        SUPPLIER_ID,
        INVENTORY_ITEM_ID,
        ORDERED_EMPLOYEE_ID
    )
VALUES
    (10, 100, 1),
    (10, 101, 1),
    (10, 200, 1),
    (10, 201, 1),
    (10, 202, 1),
    (20, 500, 2),
    (20, 501, 2),
    (20, 600, 6),
    (20, 601, 2),
    (20, 602, 2),
    (90, 900, 6);