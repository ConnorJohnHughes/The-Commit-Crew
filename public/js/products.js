document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', async (e) => {
        const productDiv = e.target.closest('.product');
        const id = productDiv.dataset.id;
        const name = productDiv.querySelector('h3').textContent;
        const price = productDiv.querySelector('p').textContent.replace('$', '');

        await fetch('/api/cart/items', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, name, price })
        });

        fetchCart(); 
    });
});