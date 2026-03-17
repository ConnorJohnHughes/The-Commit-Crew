import { Router } from "express";
import { getProducts, productsById } from "../controllers/products.controller.js";
import * as cartCtl from '../controllers/cart.controller.js';

const router = Router();

// REST Endpoint - Products API (stub)
router.get("/api/products", getProducts);

router.get("/api/products/:id", productsById );


// Session-based Cart Endpoints
router.get("/api/cart", cartCtl.getCart);

router.post("/api/cart/items", cartCtl.addItem);

router.delete("/api/cart/items/:productId", cartCtl.removeItem);

router.post("/api/cart/clear", cartCtl.clearCart);



export default router;