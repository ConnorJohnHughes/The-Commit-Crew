import * as user from './../services/user.service.js'
import passport from 'passport'

//register
export const registerPage = (req, res) => res.status(200).render("register", {
    title: "Register",
    errors: req.query.errors
})
export const register = (req, res) => {
    const {username, password, confirm} = req.body;

    if(password === confirm) {
        user.createUser(username, password);
        res.redirect("/login");
    }else{
        res.redirect("/register?errors=Passwords do not match!")
    }
}

export const loginPage = (req, res) => res.status(200).render("login", {
    title: "Login",
    errors: req.query.errors
});
export const login = passport.authenticate('local', {
    successRedirect: "/products",
    failureRedirect: "/login?errors=Invalid Credentials"
})

//login