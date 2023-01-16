import pool from "../../config/database.js";
import loginModel from "./loginModel.js";

export default {
  login(req, res) {
    res.render("login/login", {
      colorFlash: req.flash("color"),
      statusFlash: req.flash("status"),
      pesanFlash: req.flash("message"),
    });
  },

  loginAuth(req, res) {
    let email = req.body.email;
    let password = req.body.pass;
    if (email && password) {
      pool.getConnection(function (err, connection) {
        if (err) throw err;
        loginModel.getUser(connection, req.body, (err, results) => {
          if (err) throw err;
          if (results.length > 0) {
            req.session.loggedin = true;
            req.session.userid = results[0].user_id;
            req.session.username = results[0].user_name;
            res.redirect("/dashboard");
          } else {
            req.flash("color", "danger");
            req.flash("status", "Oops..");
            req.flash("message", "Email atau Password salah!!");
            res.redirect("/login");
          }
        });
        connection.release();
      });
    } else {
      res.redirect("/login");
      res.end();
    }
  },

  logout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        return console.log(err);
      }
      res.clearCookie("secretname");
      res.redirect("/");
    });
  },
};
