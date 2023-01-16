import express from "express";
const Router = express.Router();

import verify from "../../middleware/verify.js";
import loginController from "./loginController.js";

Router.get("/", verify.isLogout, loginController.login);
Router.get("/logout", loginController.logout);

Router.post("/auth", loginController.loginAuth);

export default Router;
