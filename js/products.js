document.addEventListener('DOMContentLoaded', function() {
    // Fetch products from products.json and display them
    fetch('api/products.json')
        .then(response => response.json())
        .then(products => {
            const productList = document.querySelector('.product-list');
            products.forEach(product => {
                const productItem = document.createElement('div');
                productItem.classList.add('product-item');
                productItem.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <button class="btn">Add to Cart</button>
                `;
                productList.appendChild(productItem);
            });

            // Add event listeners to "Add to Cart" buttons
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
        })
        .catch(error => console.error('Error fetching products:', error));
});