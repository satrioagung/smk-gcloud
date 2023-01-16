import express from "express";
const Router = express.Router();
import dashboardController from "./dashboardController.js";
import uploadImage from "../../middleware/uploadImage.js";
import verify from "../../middleware/verify.js";

Router.get("/", verify.isLogin, dashboardController.index);

//admin
Router.get("/admin", verify.isLogin, dashboardController.admin);
Router.post("/createadmin", verify.isLogin, dashboardController.createAdmin);
Router.get("/deleteadmin/:id", verify.isLogin, dashboardController.deleteAdmin);

// visi misi
Router.get("/visimisi", verify.isLogin, dashboardController.visiMisi);
Router.get("/editvisimisi/:id", verify.isLogin, dashboardController.editVisiMisi);
Router.post("/editvisimisi/:id", verify.isLogin, dashboardController.updateVisiMisi);

// sambutan
Router.get("/sambutan", verify.isLogin, dashboardController.sambutan);
Router.get("/editsambutan/:id", verify.isLogin, dashboardController.editSambutan);
Router.post( "/editsambutan/:id", verify.isLogin, uploadImage.fotoSambutan.single('foto'), dashboardController.updateSambutan);

// kejuruan
Router.get("/kejuruan", verify.isLogin, dashboardController.kejuruan);
Router.get("/editkejuruan/:id", verify.isLogin, dashboardController.editKejuruan);
Router.post("/editkejuruan/:id", verify.isLogin, dashboardController.updateKejuruan);

// berita
Router.get("/berita", verify.isLogin, dashboardController.berita);
Router.post("/createberita", verify.isLogin, uploadImage.fotoBerita.single('foto'), dashboardController.createBerita);
Router.get("/editberita/:id", verify.isLogin, dashboardController.editBerita);
Router.post("/editberita/:id", verify.isLogin, uploadImage.fotoBerita.single('foto'), dashboardController.updateBerita);
Router.get("/deleteberita/:id", verify.isLogin, dashboardController.deleteBerita);

// komentar
Router.get("/komentar", verify.isLogin, dashboardController.komentar);
Router.get("/editkomentar/:id", verify.isLogin, dashboardController.editKomentar);
Router.post("/editkomentar/:id", verify.isLogin, dashboardController.updateKomentar);
Router.get("/deletekomentar/:id", verify.isLogin, dashboardController.deleteKomentar);

// galeri
Router.get("/galeri", verify.isLogin, dashboardController.galeri);
Router.post("/creategaleri", verify.isLogin, uploadImage.fotoGaleri.single('foto'), dashboardController.createGaleri);
Router.get("/editgaleri/:id", verify.isLogin, dashboardController.editGaleri);
Router.post("/editgaleri/:id", verify.isLogin, uploadImage.fotoGaleri.single('foto'), dashboardController.updateGaleri);
Router.get( "/deletegaleri/:id", verify.isLogin, dashboardController.deleteGaleri);


export default Router;
