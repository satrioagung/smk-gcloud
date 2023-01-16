import dashboardModel from "./dashboardModel.js";
import fs from "fs";

export default {
  index: (req, res) => {
    dashboardModel.getAll((error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      res.render("dashboard/index", { datas });
    });
  },

  // CRUD admin
  admin: (req, res) => {
    dashboardModel.get("table_user", (error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      res.render("dashboard/admin", { datas });
    });
  },

  createAdmin: (req, res) => {
    dashboardModel.createAdmin(req.body, (error, result) => {
      res.redirect("/dashboard/admin");
    });
  },

  deleteAdmin: (req, res) => {
    dashboardModel.deleteAdmin(req.params.id, (error, result) => {
      res.redirect("/dashboard/admin");
    });
  },

  // CRUD Visi Misi
  visiMisi: (req, res) => {
    dashboardModel.get("visimisi", (error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      res.render("dashboard/visi-misi", { datas });
    });
  },

  editVisiMisi: (req, res) => {
    // menangkap params  yang tidak sesuai (karakter bukan angka)
    if (req.params.id >= 0 == false) {
      return res.render("dashboard/page-not-found");
    }

    dashboardModel.getById("visimisi", req.params.id, (error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      // menangkap params yang sesuai (id tidak terdaftar)
      if (result.length < 1) {
        return res.render("dashboard/page-not-found");
      }
      res.render("dashboard/edit-visi-misi", { datas });
    });
  },

  updateVisiMisi: (req, res) => {
    dashboardModel.update(
      "visimisi",
      req.body,
      req.params.id,
      (error, result) => {
        res.redirect("/dashboard/visimisi");
      }
    );
  },

  // CRUD Sambtan
  sambutan: (req, res) => {
    dashboardModel.get("sambutan", (error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      res.render("dashboard/sambutan", { datas });
    });
  },

  editSambutan: (req, res) => {
    // menangkap params  yang tidak sesuai(karakter bukan angka)
    if (req.params.id >= 0 == false) {
      return res.render("dashboard/page-not-found");
    }

    dashboardModel.getById("sambutan", req.params.id, (error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      // menangkap params yang sesuai (id tidak terdaftar)
      if (result.length < 1) {
        return res.render("dashboard/page-not-found");
      }
      res.render("dashboard/edit-sambutan", { datas });
    });
  },

  updateSambutan: (req, res) => {
    if (!req.file) {
      // Kondisi jika tidak update foto
      dashboardModel.update(
        "sambutan",
        req.body,
        req.params.id,
        (error, result) => {
          console.log("Foto tidak diperbarui!");
          res.redirect("/dashboard/sambutan");
        }
      );
    } else {
      // Kondisi jika foto diperbarui
      // Hapus dulu file foto lama
      dashboardModel.getById("sambutan", req.params.id, (error, result) => {
        if (error) {
          throw error;
        }
        const row = JSON.parse(JSON.stringify(result));
        const nameFoto = row.map((obj) => obj.foto_sambutan);
        const pathFoto = `assets/images/sambutan/${nameFoto.toString()}`;
        if (fs.existsSync(pathFoto)) {
          fs.unlinkSync(pathFoto);
        }
      });

      // Update data baru ke database
      dashboardModel.updateUpload(
        "sambutan",
        req.body,
        req.params.id,
        req.file.filename,
        (error, result) => {
          res.redirect("/dashboard/sambutan");
        }
      );
    }
  },

  // CRUD Kejuruan
  kejuruan: (req, res) => {
    dashboardModel.get("kejuruan", (error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      res.render("dashboard/kejuruan", { datas });
    });
  },

  editKejuruan: (req, res) => {
    // menangkap params  yang tidak sesuai (karakter bukan angka)
    if (req.params.id >= 0 == false) {
      return res.render("dashboard/page-not-found");
    }

    dashboardModel.getById("kejuruan", req.params.id, (error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      // menangkap params yang sesuai (id tidak terdaftar)
      if (result.length < 1) {
        return res.render("dashboard/page-not-found");
      }
      res.render("dashboard/edit-kejuruan", { datas });
    });
  },

  updateKejuruan: (req, res) => {
    dashboardModel.update(
      "kejuruan",
      req.body,
      req.params.id,
      (error, result) => {
        res.redirect("/dashboard/kejuruan");
      }
    );
  },

  // CRUD Berita
  berita: (req, res) => {
    dashboardModel.get("berita", (error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      res.render("dashboard/berita", { datas });
    });
  },

  createBerita: (req, res) => {
    dashboardModel.createUpload(
      "berita",
      req.body,
      req.file.filename,
      (error, result) => {
        res.redirect("/dashboard/berita");
      }
    );
  },

  editBerita: (req, res) => {
    // menangkap params  yang tidak sesuai (karakter bukan angka)
    if (req.params.id >= 0 == false) {
      return res.render("dashboard/page-not-found");
    }

    dashboardModel.getById("berita", req.params.id, (error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      // menangkap params yang sesuai (id tidak terdaftar)
      if (result.length < 1) {
        return res.render("dashboard/page-not-found");
      }
      res.render("dashboard/edit-berita", { datas });
    });
  },

  updateBerita: (req, res) => {
    if (!req.file) {
      // Kondisi jika tidak update foto
      dashboardModel.updateAktif(
        "berita",
        req.body,
        req.params.id,
        (error, result) => {
          console.log("Foto tidak diperbarui!");
          res.redirect("/dashboard/berita");
        }
      );
    } else {
      // Kondisi jika foto diperbarui
      // Hapus dulu file foto lama
      dashboardModel.getById("berita", req.params.id, (error, result) => {
        if (error) {
          throw error;
        }
        const row = JSON.parse(JSON.stringify(result));
        const nameFoto = row.map((obj) => obj.foto_berita);
        const pathFoto = `assets/images/berita/${nameFoto.toString()}`;
        if (fs.existsSync(pathFoto)) {
          fs.unlinkSync(pathFoto);
        }
      });

      // Update data baru ke database
      dashboardModel.updateUploadAktif(
        "berita",
        req.body,
        req.params.id,
        req.file.filename,
        (error, result) => {
          res.redirect("/dashboard/berita");
        }
      );
    }
  },

  deleteBerita: (req, res) => {
    // Hapus file foto
    dashboardModel.getById("berita", req.params.id, (err, result) => {
      const row = JSON.parse(JSON.stringify(result));
      const nameFoto = row.map((obj) => obj.foto_berita);
      const pathFoto = `assets/images/berita/${nameFoto.toString()}`;
      if (fs.existsSync(pathFoto)) {
        fs.unlinkSync(pathFoto);
      }
    });

    // Hapus data di database
    dashboardModel.delete("berita", req.params.id, (err, result) => {
      res.redirect("/dashboard/berita");
    });
  },

  // CRUD Komentar
  komentar: (req, res) => {
    dashboardModel.get("komentar", (error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      res.render("dashboard/komentar", { datas });
    });
  },

  editKomentar: (req, res) => {
    // menangkap params  yang tidak sesuai (karakter bukan angka)
    if (req.params.id >= 0 == false) {
      return res.render("dashboard/page-not-found");
    }

    dashboardModel.getById("komentar", req.params.id, (error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      // menangkap params yang sesuai (id tidak terdaftar)
      if (result.length < 1) {
        return res.render("dashboard/page-not-found");
      }
      res.render("dashboard/edit-komentar", { datas });
    });
  },

  updateKomentar: (req, res) => {
    dashboardModel.updateKomentar(req.body, req.params.id, (error, result) => {
      res.redirect("/dashboard/komentar");
    });
  },

  deleteKomentar: (req, res) => {
    dashboardModel.delete("komentar", req.params.id, (error, result) => {
      res.redirect("/dashboard/komentar");
    });
  },

  //CRUD Galeri
  galeri: (req, res) => {
    dashboardModel.get("galeri", (error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      res.render("dashboard/galeri", { datas });
    });
  },

  createGaleri: (req, res) => {
    dashboardModel.createUpload(
      "galeri",
      req.body,
      req.file.filename,
      (error, result) => {
        res.redirect("/dashboard/galeri");
      }
    );
  },

  editGaleri: (req, res) => {
    // menangkap params  yang tidak sesuai (karakter bukan angka)
    if (req.params.id >= 0 == false) {
      return res.render("dashboard/page-not-found");
    }

    dashboardModel.getById("galeri", req.params.id, (error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      // menangkap params yang sesuai (id tidak terdaftar)
      if (result.length < 1) {
        return res.render("dashboard/page-not-found");
      }
      res.render("dashboard/edit-galeri", { datas });
    });
  },

  updateGaleri: (req, res) => {
    if (!req.file) {
      // Kondisi jika tidak update foto
      dashboardModel.updateAktif(
        "galeri",
        req.body,
        req.params.id,
        (error, result) => {
          console.log("Foto tidak diperbarui!");
          res.redirect("/dashboard/galeri");
        }
      );
    } else {
      // Kondisi jika foto diperbarui
      // Hapus dulu file foto lama
      dashboardModel.getById("galeri", req.params.id, (error, result) => {
        if (error) {
          throw error;
        }
        const row = JSON.parse(JSON.stringify(result));
        const nameFoto = row.map((obj) => obj.foto_galeri);
        const pathFoto = `assets/images/galeri/${nameFoto.toString()}`;
        if (fs.existsSync(pathFoto)) {
          fs.unlinkSync(pathFoto);
        }
      });

      // Update data baru ke database
      dashboardModel.updateUploadAktif(
        "galeri",
        req.body,
        req.params.id,
        req.file.filename,
        (error, result) => {
          res.redirect("/dashboard/galeri");
        }
      );
    }
  },

  deleteGaleri: (req, res) => {
    // Hapus file foto
    dashboardModel.getById("galeri", req.params.id, (error, result) => {
      if (error) {
        throw error;
      }
      const row = JSON.parse(JSON.stringify(result));
      const nameFoto = row.map((obj) => obj.foto_galeri);
      const pathFoto = `assets/images/galeri/${nameFoto.toString()}`;
      if (fs.existsSync(pathFoto)) {
        fs.unlinkSync(pathFoto);
      }
    });

    // Hapus data di database
    dashboardModel.delete("galeri", req.params.id, (error, result) => {
      res.redirect("/dashboard/galeri");
    });
  },
};
