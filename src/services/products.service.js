import { connection } from "../model/db.connect.js";


/**
 * Fetch all products from the database
 * 
 * @returns array of product rows
 */
export const getAllProducts = async () => {
  // Query to retrieve all products
  const sql = "SELECT * FROM products";

  // Returns an array of [rows, fields]
  const [rows] = await connection.execute(sql);

  // Return rows
  return rows;
}

export const getFilteredProducts = async (filters) => {
  // SQL Query returns all products
  let sql = "SELECT * FROM products WHERE 1=1";

  // Array for values used to bind the parameters
  const values = [];

  // apply the filter if a category filter was provided
  if (filters.category) {
    sql += " AND category = ?";
    values.push(filters.category);
  }

  const [rows] = await connection.execute(sql, values);

  return rows;
}

