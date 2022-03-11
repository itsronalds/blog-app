import mysql from 'mysql';
import dotenv from 'dotenv';
import { promisify } from 'util';

dotenv.config();

const DB_CONFIG = {
  host: 'localhost',
  user: 'root',
  password: '01071998',
  database: 'blog',
  port: process.env.DB_PORT,
  charset: 'utf8mb4',
};

const dbConnection = mysql.createPool(DB_CONFIG);

dbConnection.getConnection((err, connection) => {
  if (err) {
    return console.log(err);
  }

  if (connection) {
    connection.release();
  }

  console.log('DB is connected!');
});

const dbQuery = promisify(dbConnection.query).bind(dbConnection);

export default dbQuery;
