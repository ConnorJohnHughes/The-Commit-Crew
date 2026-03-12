import { Router } from "express";
import * as ctl from "../controllers/products.controller.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("landingPage", {
        title: "Landing Page",

    });
});

export default router;