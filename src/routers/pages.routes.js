import { Router } from 'express';
import * as ctl from '../controllers/default.controller.js';
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
// router.get("/products", (req, res) => {
//   res.render("products",{
//     title: "Products",
    
    
//   });
// });

router.get('/products', ctl.allProducts )

// Stub About Page 
router.get("/about", (req, res) => {
  res.render("about", {
    title: "About"
  });
});



export default router;