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

  getBerita: (url, callback) => {
    const query = `SELECT berita.id_berita, nama_berita, foto_berita, url_berita, 
    detail_berita, nama_komentar, detail_komentar, date_komentar, aktif_komentar
    FROM berita INNER JOIN komentar
    ON berita.id_berita = komentar.id_berita
    WHERE url_berita = '${url}' AND aktif_berita= 'yes'`;
    pool.query(query, callback);
  },

  createKomen: (data, callback) => {
    let tgl = new Date();
    let tanggal = `${tgl.getFullYear()}/${
      tgl.getMonth() + 1
    }/${tgl.getDate()}/`;

    const query = `INSERT INTO komentar SET
    nama_komentar = '${data.nama}',
    email_komentar = '${data.email}',
    detail_komentar = '${data.detail}',
    date_komentar = '${tanggal}',
    id_berita = '${data.id_berita}'`;
    pool.query(query, callback);
  },
};
