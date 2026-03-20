import * as cartService from '../services/cart.service.js';

export const getCart = (req, res) => {
    const cart = cartService.getCart(req.session);

    return res.status(200).json({
        success: true,
        data: { cart }
    });
};


export const addItem = (req, res) => {
    // eslint-disable-next-line camelcase
    const { id, name, price, image_path} = req.body;

    if (!id || !name || !price) {
        return res.status(400).json({
            success: false,
            message: "id, name, and price are required"
        });
    }

    const cart = cartService.addToCart(req.session, {
        id: Number(id),
        name,
        price: Number(price),
        // eslint-disable-next-line camelcase
        image_path
    });
    console.log("REQ BODY:", req.body);

    return res.status(201).json({
        success: true,
        data: { cart }
    });
};

export const removeItem = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "id is required"
        });
    }

    const cart = cartService.removeFromCart(req.session, Number(id));

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

export const increaseQuantity = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "id is required"
        });
    }

    const cart = cartService.increaseQuantity(req.session, Number(id));

    return res.status(200).json({
        success: true,
        data: { cart }
    });
};

export const decreaseQuantity = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            success: false,
            message: "id is required"
        });
    }

    const cart = cartService.decreaseQuantity(req.session, Number(id));

    return res.status(200).json({
        success: true,
        data: { cart }
    });
};