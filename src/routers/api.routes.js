import { Router } from "express";
import { getProducts, getProductsById } from "../controllers/products.controller.js";

const router = Router();

// REST Endpoint - Products API (stub)
router.get("/api/products", getProducts);

router.get("/api/products/:id", getProductsById);

export default router;