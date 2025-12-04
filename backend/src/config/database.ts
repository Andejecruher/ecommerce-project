import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

// conectar a la base de datos MySQL
export const Database = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'ecommerce_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function getConnection() {
  return Database.getConnection();
}

export async function getPool() {
  return Database;
}