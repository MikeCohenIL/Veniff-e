document.addEventListener("DOMContentLoaded", () => {
    const headerContainer = document.getElementById('main-header');

    fetch('../Header/HeaderOnly.html')
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load header");
            }
            return response.text();
        })
        .then(data => {
            // 1. Inject the HTML
            headerContainer.innerHTML = data;

            // 2. NOW initialize the hamburger menu logic
            const hamMenu = headerContainer.querySelector('.ham-menu');
            const offScreenMenu = headerContainer.querySelector('.off-screen-menu');

            if (hamMenu && offScreenMenu) {
                hamMenu.addEventListener('click', () => {
                    hamMenu.classList.toggle('active');
                    offScreenMenu.classList.toggle('active');
                });
            }
        })
        .catch(error => console.error('Error loading header:', error));
});