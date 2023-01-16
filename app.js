import express from "express";
import mysql from "mysql";

//import dotenv
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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
  const query = "SELECT * FROM sambutan";
  pool.query(query, (error, result) => {
    if (!result) {
      res.json({ status: "not found" });
    } else {
      res.json(result);
    }
  });
});

//app listen
app.listen(port, () => {
  console.log(`app running on http://localhost:${port}`);
});
