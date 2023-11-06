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
        "Male",
        "John Doe",
        "7138321234",
        "123 Comet Avenue, Richardson, TX 75080"
    )
VALUES
    (
        2,
        "787054902",
        "Manager",
        "Male",
        "Brandon West",
        "6232450982",
        "8697 Tarkiln Hill Street, Sugar Land, TX 77478"
    )
VALUES
    (
        3,
        "818325099",
        "Bartender",
        "Male",
        "Alex Lowe",
        "5218468484",
        "136 Bradford Street, Rosenberg, TX 77471"
    )
VALUES
    (
        4,
        "433737553",
        "Waiter",
        "Male",
        "Ben Frazier",
        "6618649433",
        "43 Lake Forest Lane, Dallas, TX 75234"
    )
VALUES
    (
        5,
        "140427513",
        "Cashier",
        "Male",
        "Andre Owens",
        "7015023741",
        "778 Broad Street, San Antonio, TX 78207"
    )
VALUES
    (
        6,
        "926004287",
        "Manager",
        "Female",
        "Sydney Williams",
        "8305294304",
        "7679 High Street, Laredo, TX 78041"
    )
VALUES
    (
        7,
        "360334300",
        "Waiter",
        "Female",
        "Isabel Sampson",
        "6174934834",
        "15 Brewery Street, Allen, TX 75002"
    )
VALUES
    (
        8,
        "731575038",
        "Waiter",
        "Female",
        "Ellen McIntosh",
        "3527419526",
        "6 Helen Lane, Longview, TX 75604"
    )
VALUES
    (
        9,
        "127016672",
        "Cashier",
        "Female",
        "Sarah Hicks",
        "8788918433",
        "5 Glenridge Street, Spring, TX 77373"
    )
VALUES
    (
        10,
        "065532875",
        "Waiter",
        "Female",
        "Carlie Gardner",
        "3862018826",
        "8175 Kirkland Court, San Juan, TX 78589"
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
    (100, "Chicken Breast", 50, 10)
VALUES
    (101, "Ground Beef", 45, 10)
VALUES
    (200, "Parmesan Cheese", 10, 10)
VALUES
    (201, "Lettuce", 14, 10)
VALUES
    (202, "White Mushroom", 40, 10)
VALUES
    (500, "Fettuccine Pasta", 35, 20)
VALUES
    (501, "Spaghetti Pasta", 25, 20)
VALUES
    (600, "Tomato Basil Sauce", 18, 20)
VALUES
    (601, "Alfredo Sauce", 20, 20)
VALUES
    (602, "Marsala Sauce", 30, 20)
VALUES
    (900, "Vanilla Ice Cream", 50, 90);

# POPULATE MENU TABLE
INSERT INTO
    MENU(MENU_ITEM_ID, MENU_ITEM_NAME, INGREDIENTS, COST)
VALUES
    (
        1,
        "Chicken Alfredo",
        "Chicken Breast, Fettuccine Pasta, Alfredo Sauce",
        22.00
    )
VALUES
    (2, "Salad", "Lettuce, White Mushroom", 8.00)
VALUES
    (
        3,
        "Spaghetti and Meatballs",
        "Ground Beef, Spaghetti Pasta, Tomato Basil Sauce",
        16.00
    )
VALUES
    (
        4,
        "Chicken Parmesan",
        "Chicken Breast, Parmesan Cheese, Tomato Basil Sauce",
        25.00
    )
VALUES
    (
        5,
        "Chicken Marsala",
        "Chicken Breast, White Mushroom, Marsala Sauce",
        24.00
    )
VALUES
    (
        10,
        "Vanilla Ice Cream",
        "Vanilla Ice Cream",
        6.00
    );

# POPULATE CUSTOMERS TABLE
INSERT INTO
    CUSTOMERS(CUSTOMER_ID, PHONE_NUMBER, CUSTOMER_NAME, ORDERS)
VALUES
    (1, "7131234567", "Eugene McDermott", 1)
VALUES
    (2, "7137654321", "Tom Brady", 1)
VALUES
    (3, "8322387130", "Mariah Carey", 1)
VALUES
    (4, "8789098877", "Jalal Omer", 1)
VALUES
    (5, "6550990777", "Temoc", 4)
VALUES
    (6, "3224556566", "Selena Gomez", 2);

# POPULATE CUSTOMER_TRANSACTIONS TABLE
INSERT INTO
    CUSTOMER_TRANSACTIONS(
        CUSTOMER_TRANSACTION_ID,
        CUSTOMER_ID,
        CUSTOMER_TOTAL_COST,
        WAITER_ID
    )
VALUES
    (10001, 1, 49.00, 4)
VALUES
    (10002, 2, 30.00, 4)
VALUES
    (10003, 5, 14.00, 7)
VALUES
    (10004, 3, 22.00, 8)
VALUES
    (10005, 5, 47.00, 8)
VALUES
    (10006, 6, 6.00, 7)
VALUES
    (10007, 6, 16.00, 4)
VALUES
    (10008, 4, 49.00, 4)
VALUES
    (10009, 5, 28.00, 4)
VALUES
    (10010, 5, 25.00, 8);

# POPULATE CUSTOMER_ORDERED_ITEMS TABLE
INSERT INTO
    CUSTOMER_ORDERED_ITEMS(CUSTOMER_ID, MENU_ITEM_ID)
VALUES
    (1, 4)
VALUES
    (1, 5)
VALUES
    (2, 5)
VALUES
    (2, 6)
VALUES
    (3, 2)
VALUES
    (4, 4)
VALUES
    (4, 5)
VALUES
    (5, 2)
VALUES
    (5, 10)
VALUES
    (5, 1)
VALUES
    (5, 4)
VALUES
    (5, 1)
VALUES
    (5, 10)
VALUES
    (5, 4);

# POPULATE SUPPLIERS TABLE
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
    )
VALUES
    (
        20,
        "Luigi's Italian Ingredients",
        "444 Frankford Street, Richardson, TX, 75080",
        "5058084322"
    )
VALUES
    (
        90,
        "Mable's Creamery",
        "8448 Independence Road, Frisco, TX, 75035",
        "3438134333"
    );

# POPULATE SUPPLIER_TRANSACTIONS TABLE
INSERT INTO
    SUPPLIER_TRANSACTIONS(
        SUPPLIER_ID,
        SUPPLIER_TRANSACTION_ID,
        SUPPLIER_TOTAL_COST
    )
VALUES
    (10, 90001, 525.87)
VALUES
    (20, 90002, 350.50)
VALUES
    (20, 90003, 233.88)
VALUES
    (90, 90004, 85.00)
VALUES
    (10, 90005, 740.50)
VALUES
    (10, 90006, 230.00)
VALUES
    (20, 90007, 332.85)
VALUES
    (20, 90008, 110.00)
VALUES
    (90, 90009, 100.00)
VALUES
    (20, 90010, 435.60);

# POPULATE COMPANY_ORDERED_ITEMS TABLE
INSERT INTO
    COMPANY_ORDERED_ITEMS(
        SUPPLIER_ID,
        INVENTORY_ITEM_ID,
        ORDERED_EMPLOYEE_ID
    )
VALUES
    (10, 100, 1)
VALUES
    (10, 101, 1)
VALUES
    (10, 200, 1)
VALUES
    (10, 201, 1)
VALUES
    (10, 202, 1)
VALUES
    (20, 500, 2)
VALUES
    (20, 501, 2)
VALUES
    (20, 600, 6)
VALUES
    (20, 601, 2)
VALUES
    (20, 602, 2)
VALUES
    (90, 900, 6);