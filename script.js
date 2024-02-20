document.addEventListener('DOMContentLoaded', function() {
    const menuSection = document.getElementById('menu');
    const cartItemsList = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-btn');
    let cart = [];

    // Sample menu items
    const menuItems = [
        { id: 1, name: 'Pizza', price: 10 },
        { id: 2, name: 'Burger', price: 8 },
        { id: 3, name: 'Salad', price: 6 },
    ];

    // Populate menu
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>$${item.price}</p>
            <button data-id="${item.id}" class="add-to-cart-btn">Add to Cart</button>
        `;
        menuSection.appendChild(menuItem);
    });

    // Add to cart functionality
    menuSection.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart-btn')) {
            const itemId = parseInt(event.target.getAttribute('data-id'));
            const selectedItem = menuItems.find(item => item.id === itemId);
            if (selectedItem) {
                cart.push(selectedItem);
                renderCart();
            }
        }
    });

    // Render cart
    function renderCart() {
        cartItemsList.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('li');
            cartItem.textContent = `${item.name} - $${item.price}`;
            cartItemsList.appendChild(cartItem);
        });
    }

    // Checkout functionality
    checkoutButton.addEventListener('click', function() {
        const total = cart.reduce((acc, item) => acc + item.price, 0);
        alert(`Total: $${total}`);
        // You can implement further processing here, like sending the order to a server.
        // For simplicity, we'll just display the total in an alert.
    });
});
