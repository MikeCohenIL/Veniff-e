// 1. המערך שלך - נשמר כפי שהוא
const categories = [
    { id: 1, name: "Toasts", image: "../images/toast.jpg" },
    { id: 2, name: "Pastries", image: "../images/pastries.jpg" },
    { id: 3, name: "Breakfasts", image: "../images/breakfasts.jpg" },
    { id: 4, name: "Desserts", image: "../images/desserts.jpg" },
    { id: 5, name: "Drinks", image: "../images/drinks.jpg" },
    { id: 6, name: "Sandwiches", image: "../images/sandwiches.jpg" }
];
function initCategories() {
    const cardElements = document.querySelectorAll(".category-item");

    cardElements.forEach((card) => {
        card.addEventListener("click", () => {
            const id = card.getAttribute("data-id");

            const categoryData = categories.find(c => c.id == id);
            const categoryName = categoryData ? categoryData.name : "Unknown";

            localStorage.setItem("Id", id);

            console.log("Saving ID:", id, "Name:", categoryName);

            window.location.href = "../product/productPage.html";

        });
    });
}

document.addEventListener("DOMContentLoaded", initCategories);