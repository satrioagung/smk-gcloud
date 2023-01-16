import dashboardModel from "./dashboardModel.js";

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

  // CRUD Komentar
  komentar: (req, res) => {
    dashboardModel.get("komentar", (error, result) => {
      if(error){
        throw error
      }
      const datas = JSON.parse(JSON.stringify(result));
      res.render("dashboard/komentar", { datas });
    });
  },

  createKomentar: (req, res) => {
    dashboardModel.create("visimisi", req.body, (error, result) => {
      res.redirect("/dashboard/visimisi");
    });
  },

  editKomentar: (req, res) => {
    // menangkap params  yang tidak sesuai (karakter bukan angka)
    if (req.params.id >= 0 == false) {
      return res.render("dashboard/page-not-found");
    }

    dashboardModel.getById("komentar", req.params.id, (error, result) => {
      if(error) {
        throw error
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

};
