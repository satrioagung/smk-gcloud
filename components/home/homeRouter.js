import express from "express";
import homeController from "./homeController.js";

const Router = express.Router();

Router.get("/", homeController.index);
Router.get("/berita/:url", homeController.detailBerita);
Router.post("/komen", homeController.postKomen);

export default Router;
