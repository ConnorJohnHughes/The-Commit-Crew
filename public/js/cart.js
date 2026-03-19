/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', () => {


    // get cart
    async function fetchCart() {
        const res = await fetch('/api/cart');
        const data = await res.json();

        const cartItemsContainer = document.getElementById('cart-items');
        const cartCount = document.getElementById('cart-count');
        const cartSubtotal = document.getElementById('cart-subtotal');

        if(!cartItemsContainer || !cartCount || !cartSubtotal) return; 
        if (!data.success) return;

        const cart = data.data.cart;
        cartCount.textContent = cart.length;
        let subtotal = 0;

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>Cart is empty</p>";
            cartSubtotal.textContent = '0.00';
            return;
        }

        cartItemsContainer.innerHTML = cart.map(item => {
            const lineTotal = Number(item.price) * Number(item.quantity);

            subtotal += lineTotal;
            return `
                <div class="cart-item" data-id="${item.id}">
                    <img 
                        src="${item.image_path || '/images/placeholder.png'}" 
                        alt="${item.name}" 
                        class="cart-item-img"
                    >

                    <div class="cart-item-info">
                        <span>${item.name}</span>
                        <span>x ${item.quantity}</span>
                    </div>

                    <span class="cart-price">
                        $${lineTotal.toFixed(2)} 
                    </span>

                    <button class="remove-item">Remove</button>
                </div>
        `;}).join('');

        cartSubtotal.textContent = subtotal.toFixed(2);

        attachRemoveListeners();
    }


    // remove item
    function attachRemoveListeners() {
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', async (e) => {
                const itemDiv = e.target.closest('.cart-item');
                const id = itemDiv.dataset.id;

                await fetch(`/api/cart/items/${id}`, {
                    method: 'DELETE'
                });
                if(document.getElementById('mini-cart')){
                    fetchCart()};
            });
        });
    }

   // clear
    document.getElementById('clear-cart')?.addEventListener('click', async () => {
        await fetch('/api/cart/clear', { method: 'POST' });
            if(document.getElementById('mini-cart')){
                fetchCart()};
    });

   

    // add
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', async (e) => {
            const productDiv = e.target.closest('.product');

            if(!productDiv){
                console.error("No product to be found");
                return;
            }

            const id = productDiv.dataset.id;
            const name = productDiv.dataset.name;
            const price = productDiv.dataset.price;

            await fetch('/api/cart/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, name, price })
            });
            if(document.getElementById('mini-cart')){
                fetchCart()};
        });
    });

    if(document.getElementById('mini-cart')){
        fetchCart()};
});