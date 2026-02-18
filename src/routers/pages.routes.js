import { Router } from 'express';

const router = Router();

// Stub Login Page
router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login"
  });
});

// Stub Register Page
router.get("/register", (req, res) => {
  res.render("register", {
    title: "Register"
  });
});

// Stub Products Page
router.get("/products", (req, res) => {
  res.render("products", {
    title: "Products"
  });
});

export default router;