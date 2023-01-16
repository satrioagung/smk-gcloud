// konfigurasi multer (upload image)
import multer from "multer";
import path from "path";

const storageSambutan = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/images/sambutan");
  },
  filename: (req, file, cb) => {
    // console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const storageBerita = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/images/berita");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const storageGaleri = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "assets/images/galeri");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export default {
  fotoSambutan: multer({ storage: storageSambutan }),
  fotoBerita: multer({ storage: storageBerita }),
  fotoGaleri: multer({ storage: storageGaleri }),
};
