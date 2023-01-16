import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

//database connetion
const pool = mysql.createPool({
  multipleStatements: true,
  host: process.env.DB_HOST, //for developing
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  // socketPath: `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`, //for deploying
});

export default pool;
