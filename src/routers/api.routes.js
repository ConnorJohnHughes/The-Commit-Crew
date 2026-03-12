import { Router } from "express";
import { getProducts, productsById } from "../controllers/products.controller.js";

const router = Router();

// REST Endpoint - Products API (stub)
router.get("/api/products", getProducts);

router.get("/api/products/:id", productsById );


// Session-based Cart Endpoints

// GET /api/cart

// POST /api/cart/items

// DELETE /api/cart/items/:id

// POST /api/cart/clear



export default router;