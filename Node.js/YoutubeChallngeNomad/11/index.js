import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/", movieRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.render('404', { err });
});

// Codesanbox does not need PORT :)
app.listen(8001, () => console.log(`✅ Server Ready!`));
