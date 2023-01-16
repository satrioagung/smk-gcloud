import express from "express";
const Router = express.Router();
import dashboardController from "./dashboardController.js";
import uploadImage from "../../middleware/uploadImage.js";

Router.get("/", dashboardController.index);

//admin
Router.get("/admin", dashboardController.admin);
Router.post("/createadmin", dashboardController.createAdmin);
Router.get("/deleteadmin/:id", dashboardController.deleteAdmin);

// visi misi
Router.get("/visimisi", dashboardController.visiMisi);
Router.get("/editvisimisi/:id", dashboardController.editVisiMisi);
Router.post("/editvisimisi/:id", dashboardController.updateVisiMisi);

// sambutan
Router.get("/sambutan", dashboardController.sambutan);
Router.get("/editsambutan/:id", dashboardController.editSambutan);
Router.post( "/editsambutan/:id", uploadImage.fotoSambutan.single('foto'), dashboardController.updateSambutan);

// kejuruan
Router.get("/kejuruan", dashboardController.kejuruan);
Router.get("/editkejuruan/:id", dashboardController.editKejuruan);
Router.post("/editkejuruan/:id", dashboardController.updateKejuruan);

// berita
Router.get("/berita", dashboardController.berita);
Router.post("/createberita", uploadImage.fotoBerita.single('foto'), dashboardController.createBerita);
Router.get("/editberita/:id", dashboardController.editBerita);
Router.post("/editberita/:id", uploadImage.fotoBerita.single('foto'), dashboardController.updateBerita);
Router.get("/deleteberita/:id", dashboardController.deleteBerita);

// komentar
Router.get("/komentar", dashboardController.komentar);
Router.get("/editkomentar/:id", dashboardController.editKomentar);
Router.post("/editkomentar/:id", dashboardController.updateKomentar);
Router.get("/deletekomentar/:id", dashboardController.deleteKomentar);

// galeri
Router.get("/galeri", dashboardController.galeri);
Router.post("/creategaleri", uploadImage.fotoGaleri.single('foto'), dashboardController.createGaleri);
Router.get("/editgaleri/:id", dashboardController.editGaleri);
Router.post("/editgaleri/:id", uploadImage.fotoGaleri.single('foto'), dashboardController.updateGaleri);
Router.get( "/deletegaleri/:id", dashboardController.deleteGaleri);


export default Router;
