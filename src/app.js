import express from 'express';
import defaultRouter from './routers/default.routes.js';
import pagesRouter from './routers/pages.router.js';

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

//routers
app.use("/", defaultRouter);
app.use("/", pagesRouter);

export default app;