import { Router } from 'express';
import * as ctl from '../controllers/products.controller.js';
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
router.get("/products", ctl.allProducts, (req, res) => {
  res.render("products",{
    title: "Products",
    
  });
});

// Stub Single product page by ID
router.get("/singleProductPage", (req,res) => {
  res.render("singleProductPage",{
    title: "Single Product Page",

  })
})

// Stub About Page 
router.get("/about", (req, res) => {
  res.render("about", {
    title: "About"
  });
});



export default router;