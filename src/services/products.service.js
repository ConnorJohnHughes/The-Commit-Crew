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

  // filter products with price >= minPrice
  if (filters.minPrice) {
    sql += " AND price >= ?";
    values.push(filters.minPrice);
  }

  // filter products with price >= minPrice
  if (filters.maxPrice) {
    sql += " AND price <= ?";
    values.push(filters.maxPrice);
  }

  // Sort by price
  if (filters.sort === "price") {
    sql += " ORDER BY price ASC";
  }

  const [rows] = await connection.execute(sql, values);

  return rows;
}

