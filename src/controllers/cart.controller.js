import * as cartService from '../services/cart.service.js';

export const getCart = (req, res) => {
    const cart = cartService.getCart(req.session);

    return res.status(200).json({
        success: true,
        data: { cart }
    });
};


export const addItem = (req, res) => {
    const { productID, name, price } = req.body;

    if (!productID || !name || !price) {
        return res.status(400).json({
            success: false,
            message: "productID, name, and price are required"
        });
    }

    const cart = cartService.addToCart(req.session, {
        productID: Number(productID),
        name,
        price: Number(price)
    });

    return res.status(201).json({
        success: true,
        data: { cart }
    });
};

export const removeItem = (req, res) => {
    const { productId } = req.params;

    if (!productId) {
        return res.status(400).json({
            success: false,
            message: "productId is required"
        });
    }

    const cart = cartService.removeFromCart(req.session, Number(productId));

    return res.status(200).json({
        success: true,
        data: { cart }
    });
};

export const clearCart = (req, res) => {
    cartService.clearCart(req.session);

    return res.status(200).json({
        success: true,
        data: { cart: [] }
    });
};