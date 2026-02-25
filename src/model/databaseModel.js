import { connection } from './db.connect.js';

export const getAllProducts = async () => {
  const [rows] = await connection.query('SELECT * FROM products');
  return rows;
};