
const selectedCatId = parseInt(localStorage.getItem('Id'));

const container = document.getElementById('productContainer');

fetch('../DataBase/Product.json')
    .then(response => {
        if (!response.ok) throw new Error("Could not load products");
        return response.json();
    })
    .then(allProducts => {
        container.innerHTML = "";

        allProducts.forEach(product => {
            if (product.Id === selectedCatId) {

                const card = document.createElement('div');
                card.className = 'productCard';

                card.innerHTML = `
                    <span class="productName">${product.ProductName}</span>
                    <span class="productPrice">$${product.Price}</span>
                    <input type="button" class="buyBTN" value="Buy Now">
                `;

                container.appendChild(card);
            }
        });
        if (container.innerHTML === "") {
            container.innerHTML = "<p style='color: white;'>No products found in this category.</p>";
        }
    })
    .catch(error => console.error("Error:", error));