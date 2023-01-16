import homeModel from "./homeModel.js";

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
};
