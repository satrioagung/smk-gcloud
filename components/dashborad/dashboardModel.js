import pool from "../../config/database.js";

export default {
  get: (tabel, callback) => {
    const query = `SELECT * FROM ${tabel}`;
    pool.query(query, callback);
  },

  getById: (tabel, id, callback) => {
    const query = `SELECT * FROM ${tabel} WHERE id_${tabel}=${id}`;
    pool.query(query, callback);
  },

  getAll: (callback) => {
    const query = `SELECT * FROM table_user;
    SELECT * FROM  visimisi; 
    SELECT * FROM  sambutan; 
    SELECT * FROM  kejuruan;
    SELECT * FROM  berita;
    SELECT * FROM  galeri`;
    pool.query(query, callback);
  },

  create: (tabel, data, callback) => {
    const query = `INSERT INTO ${tabel} SET 
    nama_${tabel}='${data.nama}', 
    detail_${tabel}='${data.detail}'`;
    pool.query(query, callback);
  },

  // Create berita
  createBerita: (data, url, file, callback) => {
    const query = `INSERT INTO berita SET 
    nama_berita='${data.nama}', 
    detail_berita='${data.detail}',
    foto_berita='${file}',
    url_berita='${url}'`;
    pool.query(query, callback);
  },

  // Create data with uploading foto by Multer
  createUpload: (tabel, data, file, callback) => {
    const query = `INSERT INTO ${tabel} SET 
    nama_${tabel}='${data.nama}', 
    detail_${tabel}='${data.detail}',
    foto_${tabel}='${file}'`;
    pool.query(query, callback);
  },

  update: (tabel, data, id, callback) => {
    const query = `UPDATE ${tabel} SET 
    nama_${tabel}='${data.nama}', 
    detail_${tabel}='${data.detail}' 
    WHERE id_${tabel}=${id}`;
    pool.query(query, callback);
  },

  // Update berita
  updateBerita: (data, url, id, callback) => {
    const query = `UPDATE berita SET 
    nama_berita='${data.nama}', 
    detail_berita='${data.detail}', 
    aktif_berita='${data.aktif}', 
    url_berita='${url}' 
    WHERE id_berita=${id}`;
    pool.query(query, callback);
  },

  // Update berita with uploading foto by Multer
  updateBeritaUpload: (data, url, id, file, callback) => {
    const query = `UPDATE berita SET 
    nama_berita='${data.nama}', 
    detail_berita='${data.detail}', 
    aktif_berita='${data.aktif}',
    foto_berita='${file}', 
    url_berita='${url}' 
    WHERE id_berita=${id}`;
    pool.query(query, callback);
  },

  // Update data with uploading foto by Multer
  updateUpload: (tabel, data, id, file, callback) => {
    const query = `UPDATE ${tabel} SET 
    nama_${tabel}='${data.nama}', 
    detail_${tabel}='${data.detail}', 
    foto_${tabel}='${file}' 
    WHERE id_${tabel}=${id}`;
    pool.query(query, callback);
  },

  // for update  menu with active status
  updateKomentar: (data, id, callback) => {
    const query = `UPDATE komentar SET aktif_komentar = '${data.aktif}' WHERE id_komentar = '${id}'`;
    pool.query(query, callback);
  },

  updateAktif: (tabel, data, id, callback) => {
    const query = `UPDATE ${tabel} SET 
    nama_${tabel} = '${data.nama}', 
    detail_${tabel} = '${data.detail}',
    aktif_${tabel} = '${data.aktif}'
    WHERE id_${tabel}=${id}`;
    pool.query(query, callback);
  },

  // Update data with uploading foto by Multer
  updateUploadAktif: (tabel, data, id, file, callback) => {
    const query = `UPDATE ${tabel} SET 
    nama_${tabel} = '${data.nama}', 
    detail_${tabel} = '${data.detail}', 
    foto_${tabel} = '${file}',
    aktif_${tabel} = '${data.aktif}' 
    WHERE id_${tabel}=${id}`;
    pool.query(query, callback);
  },

  delete: (tabel, id, callback) => {
    const query = `DELETE FROM ${tabel} WHERE id_${tabel}=${id}`;
    pool.query(query, callback);
  },

  deleteAdmin: (id, callback) => {
    const query = `DELETE FROM table_user WHERE user_id=${id}`;
    pool.query(query, callback);
  },

  createAdmin: (data, callback) => {
    const query = `INSERT INTO table_user (user_name,user_email,user_password) VALUES (?,?,SHA2(?,512));`;
    pool.query(query, [data.nama, data.email, data.password], callback);
  },
};
