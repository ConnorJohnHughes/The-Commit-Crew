async function fetchCart() {
    const res = await fetch('/api/cart');
    const data = await res.json();

    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');

    if (!data.success) return;

    const cart = data.data.cart;
    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Cart is empty</p>";
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item" data-id="${item.productID}">
            <span>${item.name}</span>
            <span>x ${item.quantity}</span>
            <button class="remove-item">Remove</button>
        </div>
    `).join('');

    attachRemoveListeners();
}

function attachRemoveListeners() {
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', async (e) => {
            const itemDiv = e.target.closest('.cart-item');
            const productId = itemDiv.dataset.id;

            await fetch(`/api/cart/items/${productId}`, {
                method: 'DELETE'
            });

            fetchCart();
        });
    });
}

document.getElementById('clear-cart')?.addEventListener('click', async () => {
    await fetch('/api/cart/clear', { method: 'POST' });
    fetchCart();
});

fetchCart();