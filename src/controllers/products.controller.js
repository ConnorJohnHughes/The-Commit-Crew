// Products API Controller
import { getAllProducts } from "../services/products.service.js";

/**
 * Get /api/products
 */
export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();

    return res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};