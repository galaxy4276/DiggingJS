import "./db";
import "./models/Movie";
import express from "express";
import path from "path";
import bodyParser from "body-parser";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "./middlewares";
import logger from 'morgan';

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(localsMiddleware);
app.use("/", movieRouter);


app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  err.message = '😥😥😥😥 Cannot Find Page 😥😥😥😥';
  res.render('404', { err });
});
// Codesanbox does not need PORT :)
app.listen(8001, () => console.log(`✅  Server Ready!`));
