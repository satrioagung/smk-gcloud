import express from "express";
const Router = express.Router();
import dashboardController from "./dashboardController.js";

Router.get("/", dashboardController.index);

//admin
Router.get("/admin", dashboardController.admin);
Router.post("/createadmin", dashboardController.createAdmin);
Router.get("/deleteadmin/:id", dashboardController.deleteAdmin);

// visi misi
Router.get("/visimisi", dashboardController.visiMisi);
Router.get("/editvisimisi/:id", dashboardController.editVisiMisi);
Router.post("/editvisimisi/:id", dashboardController.updateVisiMisi);

// kejuruan
Router.get("/kejuruan", dashboardController.kejuruan);
Router.get("/editkejuruan/:id", dashboardController.editKejuruan);
Router.post("/editkejuruan/:id", dashboardController.updateKejuruan);

// komentar
Router.get("/komentar", dashboardController.komentar);
Router.get("/editkomentar/:id", dashboardController.editKomentar);
Router.post("/editkomentar/:id", dashboardController.updateKomentar);
Router.get("/deletekomentar/:id", dashboardController.deleteKomentar);


export default Router;
