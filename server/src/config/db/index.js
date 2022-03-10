import mysql from 'mysql';
import { promisify } from 'util';

const DB_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  charset: 'utf8mb4',
};

const connection = mysql.createConnection(DB_CONFIG);

connection.connect((err) => {
  if (err) {
    throw new Error('DB connection error');
  }

  console.log('DB is connected!');
});

const dbQuery = promisify(connection.query).bind(connection);

export default dbQuery;
