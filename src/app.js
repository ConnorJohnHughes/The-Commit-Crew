import express from 'express';
import defaultRouter from './routers/default.routes.js';
import pagesRouter from './routers/pages.routes.js';
import apiRouter from './routers/api.routes.js';
import session from 'express-session';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';


import passport from 'passport';
import '../auth/localStrategy.js';



dotenv.config();

const SECRET = process.env.SESSION_SECRET;


//configure Express.js app
const app = express();



//view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

//static directories
app.use(express.static('public'));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Session 
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 30 * 60 * 1000
    }
}))

app.use((req,res,next)=>{
    if(!req.session.cart){
        req.session.cart = [];
    }
    next();
});


app.use(passport.initialize());
app.use(passport.session());

// attach the user to every request 
app.use((req, res, next) => {
    if(req.session.user){
        req.user = req.session.user;
    } else {
        req.user = null;
    };
    next();
})

app.use((req,res, next) =>{
    res.locals.cart = req.session.cart || [];

    next();
});

//routers
app.use("/", defaultRouter);
app.use("/", pagesRouter);
app.use("/", apiRouter);

export default app;