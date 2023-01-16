import pool from "../../config/database.js";

export default {
  getUser: (connect, data, cb) => {
    const query = `SELECT * FROM table_user WHERE user_email = ? AND user_password = SHA2(?,512)`;
    pool.query(query, [data.email, data.pass], cb);
  },

  createUser: (connect, data, cb) => {
    const query = `INSERT INTO table_user (user_name,user_email,user_password) VALUES (?,?,SHA2(?,512));`;
    pool.query(query, [data.username, data.email, data.pass], cb);
  },
};
