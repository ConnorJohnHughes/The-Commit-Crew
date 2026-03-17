

export const getCart = (session) => {
    if(!session.cart){
        session.cart = [];
    };
    return session.cart;
}

export const addToCart = (session, product) => {
    const cart = getCart(session);

    const existing = cart.find(p => p.productID === product.productID);

    if(existing){
        existing.quantity += 1;
    }else {
        cart.push({
            productID: product.productID,
            name: product.name,
            price: product.price,
            quantity: 1
        });
    };

    session.cart = cart;
    return cart;


};

export const removeFromCart = (session, productID) => {
    const cart = getCart(session);

    const updatedCart = cart.filter(p => p.productID !== productID);

    session.cart = updatedCart;
    return updatedCart;
};

export const clearCart = (session) => {
    session.cart = [];
}