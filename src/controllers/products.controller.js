// Products API Controller
//import { getAllProducts } from "../services/products.service.js";
import { getFilteredProducts } from "../services/products.service.js";

/**
 * Get /api/products
 */
export const getProducts = async (req, res) => {
  try {
    const filters = req.query;

    const products = await getFilteredProducts(filters);

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (err) {
    console.error("Error in getProducts:", err.message);
    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};