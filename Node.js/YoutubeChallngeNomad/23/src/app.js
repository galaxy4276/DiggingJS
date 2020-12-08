import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";
import logger from 'morgan';
import globalRouter from "./routes/globalRouter";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

if (!fs.existsSync(path.join(__dirname, 'uploads'))) {
  fs.mkdirSync(path.join(__dirname, 'uploads'));
  console.log('uploads directory created!');
}

app.use('/', globalRouter);

app.use('/', (req, res, next) => {
  const error = new Error('404 Not Found');
  throw Error(error);
});

app.use((err, req, res, next) => {
  err.status = 404;
  res.render('404', { err });
});

// Codesanbox does not need PORT :)
app.listen(4000, () => console.log(`Listening!`));