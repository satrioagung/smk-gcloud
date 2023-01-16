import express from "express";
import homeRouter from "./home/homeRouter.js";

const app = express();
const port = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", homeRouter);

//app listen
app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
});
