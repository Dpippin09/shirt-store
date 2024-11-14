document.addEventListener('DOMContentLoaded', function() {
    // Example: Fetch and display statistics
    function fetchStatistics() {
        // Simulate fetching data from an API
        const stats = {
            products: 50,
            orders: 120,
            users: 75
        };

        document.querySelector('.stat-item:nth-child(1) p').innerText = stats.products;
        document.querySelector('.stat-item:nth-child(2) p').innerText = stats.orders;
        document.querySelector('.stat-item:nth-child(3) p').innerText = stats.users;
    }

    fetchStatistics();

    // Example: Handle navigation menu toggle for mobile
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('nav ul');
            navMenu.classList.toggle('open');
        });
    }

    // Example: Add event listeners for admin actions (e.g., managing products, orders, users)
    // You can expand this section with actual functionality as needed
    const manageProductsButton = document.querySelector('#manage-products');
    if (manageProductsButton) {
        manageProductsButton.addEventListener('click', function() {
            alert('Managing products...');
            // Add your manage products functionality here
        });
    }

    const manageOrdersButton = document.querySelector('#manage-orders');
    if (manageOrdersButton) {
        manageOrdersButton.addEventListener('click', function() {
            alert('Managing orders...');
            // Add your manage orders functionality here
        });
    }

    const manageUsersButton = document.querySelector('#manage-users');
    if (manageUsersButton) {
        manageUsersButton.addEventListener('click', function() {
            alert('Managing users...');
            // Add your manage users functionality here
        });
    }
});