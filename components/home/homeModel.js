import pool from "../../config/database.js";

export default {
  getAll: (callback) => {
    const query = `SELECT * FROM  visimisi; 
        SELECT * FROM  sambutan; 
        SELECT * FROM  kejuruan;
        SELECT * FROM  berita WHERE aktif_berita = 'yes';
        SELECT * FROM  galeri WHERE aktif_galeri = 'yes'`;
    pool.query(query, callback);
  },

  getBerita: (id, callback) => {
    const query = `SELECT * FROM berita WHERE id_berita = ${id} AND aktif_berita= 'yes'; 
    SELECT * FROM komentar WHERE id_berita = ${id} AND aktif_komentar  = 'yes'`;
    pool.query(query, callback)
  },
};