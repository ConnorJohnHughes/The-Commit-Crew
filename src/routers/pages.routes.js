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
// Stub About Page 
router.get("/about", (req, res) => {
  res.render("about", {
    title: "About"
  });
});

router.use(userCtl.isLoggedIn)

// Stub Products Page
router.get("/products", productCtl.allProducts);

// Stub Single product page by ID
router.get("/products/:id", productCtl.getProductsById);









export default router;