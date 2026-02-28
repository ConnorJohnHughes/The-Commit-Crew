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



