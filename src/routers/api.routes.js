import { Router } from "express";
import { getProducts } from "../controllers/products.controller.js";

const router = Router();

// REST Endpoint - Products API (stub)
router.get("/api/products", getProducts);

export default router;