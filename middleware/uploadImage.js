// konfigurasi multer (upload image)
import multer from "multer";
import multerGcs from "multer-cloud-storage";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storageBerita = multerGcs.storageEngine({
  bucket: "agungsatrio",
  projectId: "healthy-ion-374517",
  keyFilename: path.join(__dirname, "../healthy-ion-374517-cb1ec666a96d.json"),
  destination: "/berita",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const storageSambutan = multerGcs.storageEngine({
  bucket: "agungsatrio",
  projectId: "healthy-ion-374517",
  keyFilename: path.join(__dirname, "../healthy-ion-374517-cb1ec666a96d.json"),
  destination: "/sambutan",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const storageGaleri = multerGcs.storageEngine({
  bucket: "agungsatrio",
  projectId: "healthy-ion-374517",
  keyFilename: path.join(__dirname, "../healthy-ion-374517-cb1ec666a96d.json"),
  destination: "/galeri",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const fotoBerita = multer({ storage: storageBerita });
export const fotoSambutan = multer({ storage: storageSambutan });
export const fotoGaleri = multer({ storage: storageGaleri });
