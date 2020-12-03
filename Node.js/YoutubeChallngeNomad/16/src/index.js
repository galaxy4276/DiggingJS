import "./db";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import movieRouter from "./movieRouter";
import logger from 'morgan';
import { localsMiddleware } from "./middlewares";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", movieRouter);


// Codesanbox does not need PORT :)
app.listen(8001, () => console.log(`✅  Server Ready!`));