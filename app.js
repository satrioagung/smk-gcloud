import express from "express";
import mysql from "mysql";

const app = express();
const port = process.env.PORT || 3000;

//import dotenv
import dotenv from "dotenv";
dotenv.config();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connetion
const pool = mysql.createPool({
  // host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`,
});

//router get
app.get("/", (req, res) => {
  const query = "SELECT foto_berita FROM berita";
  pool.query(query, (error, result) => {
    const data = JSON.parse(JSON.stringify(result));
    if (error) {
      throw error;
    }
    res.render("home/index", { data });
  });
});

//app listen
app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
});
