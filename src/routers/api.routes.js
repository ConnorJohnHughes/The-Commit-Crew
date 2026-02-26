import { Router } from "express";

const router = Router();

// REST Endpoint - Products API (stub)
router.get("/api/products", (req, res) => {
  res.status(200).json({ message: "GET /api/products works" });
});

export default router;