import { Router } from "express";
import { getRandomProducts } from "../services/products.service.js";
import * as ctl from "../controllers/products.controller.js";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const randomProducts = await getRandomProducts(4);

        res.render("landingPage", {
            title: "Landing Page",
            randomProducts
        });
    } catch (err) {
        console.error("Error loading landing page products:", err);

        res.render("landingPage", {
            title: "Landing Page",
            randomProducts: []
        });
    }
    
});

export default router;