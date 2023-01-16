import homeModel from "./homeModel.js";
import moment from "moment/moment.js";


export default {
  index: (req, res) => {
    homeModel.getAll((error, result) => {
      if (error) {
        throw error;
      }
      const datas = JSON.parse(JSON.stringify(result));
      res.render("home/index", { datas });
    });
  },

  detailBerita: (req, res) => {
    // menangani params yang tidak sesuai
    if(req.params.id >= 0 == false){
      return res.render("home/page-not-found");
    }

    // menangani params yang sesuai
    homeModel.getBerita(req.params.id, (err, result) => {
      if(result[0].length < 1){
        res.render("home/page-not-found");
      } else {
        const datas = JSON.parse(JSON.stringify(result));
        res.render("home/detail-berita", { datas, moment });
      }
    });
  },
};
