import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("landingPage", {
        title: "Landing Page"
    });
});

export default router;