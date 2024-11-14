document.addEventListener('DOMContentLoaded', function() {
    // Example: Calculate and display order totals
    function calculateOrderTotals() {
        const orderRows = document.querySelectorAll('.order-summary tbody tr');
        let subtotal = 0;

        orderRows.forEach(row => {
            const quantity = parseInt(row.querySelector('td:nth-child(2)').innerText);
            const price = parseFloat(row.querySelector('td:nth-child(3)').innerText.replace('$', ''));
            const total = quantity * price;
            row.querySelector('td:nth-child(4)').innerText = `$${total.toFixed(2)}`;
            subtotal += total;
        });

        const tax = subtotal * 0.08; // Example tax rate of 8%
        const total = subtotal + tax;

        document.querySelector('.order-summary tfoot td:nth-child(2)').innerText = `$${subtotal.toFixed(2)}`;
        document.querySelector('.order-summary tfoot td:nth-child(4)').innerText = `$${tax.toFixed(2)}`;
        document.querySelector('.order-summary tfoot td:nth-child(6)').innerText = `$${total.toFixed(2)}`;
    }

    calculateOrderTotals();

    // Example: Proceed to Checkout button functionality
    const checkoutButton = document.querySelector('.btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', function() {
            alert('Proceeding to checkout...');
            // Add your checkout functionality here
        });
    }
});