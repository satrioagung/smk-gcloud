import pool from "../config/database.js";

export default {
    getAll : (callback)=>{
        const query = 'SELECT foto_berita FROM berita'
        pool.query(query, callback)
    }
}
