function handleLogin() {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPass").value;
    const msg = document.getElementById("errorMsg");

    // שליפת המשתמש היחיד שקיים
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // בדיקה אם קיים משתמש ואם הפרטים תואמים
    if (storedUser && storedUser.email === email && storedUser.password === pass) {
        const defaultProducts=[
            { "ProductName": "Classic Cheese Toast", "Id": 1, "Price": "38.00" },

            { "ProductName": "Pesto & Goat Cheese Toast", "Id": 1, "Price": "42.00" },

            { "ProductName": "Smoked Salmon Toast", "Id": 1, "Price": "48.00" },

            { "ProductName": "Spicy Tuna Toast", "Id": 1, "Price": "44.00" },

            { "ProductName": "Mushroom & Yellow Cheese Toast", "Id": 1, "Price": "40.00" },

            { "ProductName": "Butter Croissant", "Id": 2, "Price": "16.00" },

            { "ProductName": "Belgian Chocolate Pastry", "Id": 2, "Price": "18.00" },

            { "ProductName": "Cinnamon Danish", "Id": 2, "Price": "18.00" },

            { "ProductName": "Cheese Borekas", "Id": 2, "Price": "14.00" },

            { "ProductName": "Almond French Pastry", "Id": 2, "Price": "19.00" },

            { "ProductName": "Israeli Breakfast", "Id": 3, "Price": "68.00" },

            { "ProductName": "Homemade Shakshuka", "Id": 3, "Price": "58.00" },

            { "ProductName": "Mushroom & Onion Omelet", "Id": 3, "Price": "52.00" },

            { "ProductName": "Mixed Berry Pancakes", "Id": 3, "Price": "45.00" },

            { "ProductName": "Granola Yogurt with Honey", "Id": 3, "Price": "32.00" },

            { "ProductName": "Baked Cheesecake", "Id": 4, "Price": "34.00" },

            { "ProductName": "Hot Chocolate Soufflé", "Id": 4, "Price": "36.00" },

            { "ProductName": "Lemon Tart", "Id": 4, "Price": "28.00" },

            { "ProductName": "Apple Pie", "Id": 4, "Price": "32.00" },

            { "ProductName": "Dulce de Leche Mousse", "Id": 4, "Price": "26.00" },

            { "ProductName": "Large Cappuccino", "Id": 5, "Price": "18.00" },

            { "ProductName": "Iced Latte", "Id": 5, "Price": "20.00" },

            { "ProductName": "Fresh Squeezed Orange Juice", "Id": 5, "Price": "16.00" },

            { "ProductName": "Green Tea with Mint", "Id": 5, "Price": "14.00" },

            { "ProductName": "Milk-based Fruit Smoothie", "Id": 5, "Price": "24.00" },

            { "ProductName": "Omelet & Cream Cheese Sandwich", "Id": 6, "Price": "28.00" },

            { "ProductName": "Salmon & Avocado Sandwich", "Id": 6, "Price": "36.00" },

            { "ProductName": "Seared Halloumi Sandwich", "Id": 6, "Price": "34.00" },

            { "ProductName": "Hot Roast Beef Sandwich", "Id": 6, "Price": "42.00" },

            { "ProductName": "Vegan Tofu & Veggies Sandwich", "Id": 6, "Price": "32.00" }
        ]
        localStorage.setItem("products_db", JSON.stringify(defaultProducts));
        window.location.href = "../DashBoard/DashBoard.html";
    } else {
        msg.innerText = "Invalid credentials or no user registered";
    }
}