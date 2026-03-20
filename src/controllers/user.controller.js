import * as userService from './../services/user.service.js'
// import passport from 'passport'

//register
export const registerPage = (req, res) => res.status(200).render("register", {
    title: "Register",
    errors: req.query.errors
})
export const register = (req, res) => {
    const {username, password, confirm} = req.body;

    if(password === confirm) {
        userService.createUser(username, password);
        res.redirect("/login");
    }else{
        res.redirect("/register?errors=Passwords do not match!")
    }
}

export const loginPage = (req, res) => res.status(200).render("login", {
    title: "Login",
    errors: req.query.errors
});

// export const login = passport.authenticate('local', {
//     successRedirect: "/products",
//     failureRedirect: "/login?errors=Invalid Credentials"
// })

//login
export const login = async (req, res) => {

    

    const { username, password } = req.body;

    if(!username || !password ) {
        return res.redirect("/login?errors=All fields required");
    };

    const user = await userService.findUserByUsername(username);

    if (!user) {
        return res.redirect("/login?errors=Invalid credentials");
    }

    const isValid = await userService.validatePassword(password, user.password);

    if(!isValid){
        return res.redirect("/login?errors=Invalid credentials!!")
    }

    req.session.user = {
        userID: user.userID,
        username: user.username,
        role: user.role
    }
    // passport.authenticate('local', {
    //     successRedirect: "/products",
    //     failureRedirect: "/login?errors=Invalid Credentials"
    // })
    // console.log(user);
    console.log(req.session.user);
    return res.redirect("/");
};

export const isLoggedIn = (req, res, next) => {
    if (req.user) {
        return next();
    } else {
        res.redirect("/login");
    }
}