import { Router } from 'express';
import * as productCtl from '../controllers/products.controller.js';
import * as userCtl from '../controllers/user.controller.js'

const router = Router();




// Stub Register Page
router.get("/register", userCtl.registerPage);
router.post('/register', userCtl.register)

// Stub Login Page
router.get("/login", userCtl.loginPage);
router.post('/login', userCtl.login)

// routes/auth.js
router.post('/logout', userCtl.useLogout);

// Stub About Page 
router.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    user : req.session.user,
    cart: req.session.cart || [],
    showCart: true,
    user : req.session.user
  });
});

router.use(userCtl.isLoggedIn)

// Stub Products Page
router.get("/products", productCtl.allProducts);

// Stub Single product page by ID
router.get("/products/:id", productCtl.getProductsById);









export default router;