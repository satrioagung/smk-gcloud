import express from "express";
import homeController from './homeController.js'
// import mysql from "mysql";
// import pool from "../config/database.js";

const Router = express.Router()

// Router.get("/", (req, res) => {
//   const query = "SELECT foto_berita FROM berita";
//   pool.query(query, (error, result) => {
//     const data = JSON.parse(JSON.stringify(result));
//     if (error) {
//       throw error;
//     }
//     res.render("home/index", { data });
//   });
// });

Router.get('/', homeController.index)

export default Router;
