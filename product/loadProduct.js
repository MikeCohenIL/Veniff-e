const data = localStorage.getItem("user");
let user = JSON.parse(data);
const selectedCatId = parseInt(localStorage.getItem('Id'));

const container = document.getElementById('productContainer');

// Get products from local storage via the 'products_db' key
const storedProducts = localStorage.getItem("products_db");
const allProducts = JSON.parse(storedProducts);

container.innerHTML = "";

allProducts.forEach(product => {
    if (product.Id === selectedCatId) {

        const card = document.createElement('div');
        card.className = 'productCard';

        card.innerHTML = `
            <span class="productName">${product.ProductName}</span>
            <span class="productPrice">€${product.Price}</span>
            <input type="button" class="buyBTN" value="Buy Now" onclick="buyNow(this)">
        `;

        container.appendChild(card);
    }
});

if (container.innerHTML === "") {
    container.innerHTML = "<p style='color: white;'>No products found in this category.</p>";
}

function loadBalanceDisplay(){
    let currentBalance = document.getElementById("currentBalance");
    currentBalance.innerText = user.balance + " €";
}

loadBalanceDisplay();