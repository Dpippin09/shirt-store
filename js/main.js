document.addEventListener('DOMContentLoaded', function() {
    // Example: Add to Cart button functionality
    const addToCartButtons = document.querySelectorAll('.btn');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productItem = this.closest('.product-item');
            const productName = productItem.querySelector('h3').innerText;
            const productPrice = productItem.querySelector('p').innerText;
            alert(`Added ${productName} to cart for ${productPrice}`);
            // Add your cart functionality here
        });
    });

    // Example: Toggle mobile navigation menu
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('nav ul');
            navMenu.classList.toggle('open');
        });
    }
});