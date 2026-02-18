import { Router } from 'express';

const router = Router();

// Stub Login Page
router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login"
  });
});

export default router;