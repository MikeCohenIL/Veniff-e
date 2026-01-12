const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

function OpenCategory(id, url) {
    // 1. Save the ID
    localStorage.setItem("Id", id);

    // 2. Redirect to the page
    window.location.href = url;
}