document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById('main-footer');

    // Only run if the footer container exists on the current page
    if (footerContainer) {
        fetch('FooterOnly.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load footer: " + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                footerContainer.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }
});