

export const getCart = (session) => {
    if(!session.cart){
        session.cart = [];
    };
    return session.cart;
}

export const addToCart = (session, product) => {
    const cart = getCart(session);

    const existing = cart.find(p => p.id === product.id);

    if(existing){
        existing.quantity += 1;
    }else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            // eslint-disable-next-line camelcase
            image_path: product.image_path
        });
    };

    session.cart = cart;
    return cart;


};

export const removeFromCart = (session, id) => {
    const cart = getCart(session);

    const updatedCart = cart.filter(p => p.id !== id);

    session.cart = updatedCart;
    return updatedCart;
};

export const clearCart = (session) => {
    session.cart = [];
}

export const increaseQuantity = (session, id) => {
    const cart = getCart(session);

    const item = cart.find(p => p.id === id);

    if (item) {
        item.quantity += 1;
    }

    session.cart = cart;
    return cart;
};

export const decreaseQuantity = (session, id) => {
    const cart = getCart(session);

    const item = cart.find(p => p.id === id);

    if (item) {
        item.quantity -= 1;

        if (item.quantity <= 0) {
            session.cart = cart.filter(p => p.id !== id);
            return session.cart;
        }
    }

    session.cart = cart;
    return cart;
};