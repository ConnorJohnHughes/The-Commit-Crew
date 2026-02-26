import express from 'express';
import defaultRouter from './routers/default.routes.js';
import pagesRouter from './routers/pages.routes.js';
import apiRouter from './routers/api.routes.js';


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
app.use("/", apiRouter);

export default app;