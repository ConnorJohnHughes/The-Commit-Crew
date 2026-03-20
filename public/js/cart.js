/* eslint-disable max-lines-per-function */
document.addEventListener('DOMContentLoaded', () => {

        const cartToggle = document.getElementById('cart-toggle');
        const cartClose = document.getElementById('cart-close');
        const cartSidebar = document.getElementById('mini-cart');
        const cartBackdrop = document.getElementById('cart-backdrop');

        function openCart() {
            cartSidebar.classList.add('open');
            cartBackdrop.classList.add('show');
        }

        function closeCart() {
            cartSidebar.classList.remove('open');
            cartBackdrop.classList.remove('show');
        }

        if (cartToggle) cartToggle.addEventListener('click', openCart);

        if (cartClose) cartClose.addEventListener('click', closeCart);
        
        if (cartBackdrop) cartBackdrop.addEventListener('click', closeCart);

        function attachQuantityListeners() {
            document.querySelectorAll('.increase-qty').forEach(button => {
                button.addEventListener('click', async () => {
                    const id = button.dataset.id;

                    await fetch(`/api/cart/items/${id}/increase`, {
                        method: 'PATCH'
                    });

                    if (document.getElementById('mini-cart')) {
                        await fetchCart();
                    }
                });
            });

            document.querySelectorAll('.decrease-qty').forEach(button => {
                button.addEventListener('click', async () => {
                    const id = button.dataset.id;

                    await fetch(`/api/cart/items/${id}/decrease`, {
                        method: 'PATCH'
                    });

                    if (document.getElementById('mini-cart')) {
                        await fetchCart();
                    }
                });
            });
        }


    // get cart
    async function fetchCart() {
        const res = await fetch('/api/cart');
        const data = await res.json();
        // console.log("CART DATA FROM SERVER:", data.data.cart);

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
                            <div class="cart-qty-controls">
                                <button class="qty-btn decrease-qty" data-id="${item.id}">-</button>
                                <span class="cart-qty">${item.quantity}</span>
                                <button class="qty-btn increase-qty" data-id="${item.id}">+</button>
                            </div>
                    </div>

                    <span class="cart-price">
                        $${lineTotal.toFixed(2)} 
                    </span>

                    <button class="remove-item">Remove</button>
                </div>
        `;}).join('');

        cartSubtotal.textContent = subtotal.toFixed(2);

        attachRemoveListeners();
        attachQuantityListeners();
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
            const imagePath = productDiv.dataset.imagePath;
            // console.log("ADD TO CART DATA:", {
            //     id,
            //     name,
            //     price,
            //     imagePath
            // });

            await fetch('/api/cart/items', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // eslint-disable-next-line camelcase
                body: JSON.stringify({ id, name, price , image_path: imagePath})
            });
            if(document.getElementById('mini-cart')){
                fetchCart()
                openCart();
            };
        });
    });

    if(document.getElementById('mini-cart')){
        fetchCart()};
});

