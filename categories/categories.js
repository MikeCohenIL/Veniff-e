const categories = [
  { id: "drinks", name: "Drinks", image: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?w=400" },
  { id: "pastries", name: "Pastries", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400" },
  { id: "salads", name: "Salads", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400" },
  { id: "sandwiches", name: "Sandwiches", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400" },
  { id: "toasts", name: "Toasts", image: "https://images.unsplash.com/photo-1497210178619-cd870a469a48?w=400" },
  { id: "breakfast", name: "Breakfast", image: "https://images.unsplash.com/photo-149485981460c-38af4a431057?w=400" }
];

function displayCategories() {
  const grid = document.getElementById("categoriesGrid");
  grid.innerHTML = "";

  categories.forEach(category => {
    const card = document.createElement("div");
    card.className = "category-card";

    // We put the name inside a <span> to style it over the image
    card.innerHTML = `
            <img src="${category.image}" alt="${category.name}">
            <div class="category-overlay">
                <span>${category.name}</span>
            </div>
        `;

    card.onclick = () => window.location.href = `items.html?category=${category.id}`;
    grid.appendChild(card);
  });
}

window.onload = displayCategories;
