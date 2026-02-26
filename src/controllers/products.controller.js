// Products API Controller

/**
 * Get /api/products
 * returns placeholder response for now
 */
export const getProducts = async (req, res) => {
  try {
    const filters = req.query;

    return res.status(200).json({
      success: true,
      message: "GET /api/product controller connected",
      filtersRecieved: filters
    });
  } catch (err) {
    return res,status(500).json({
      success: false,
      message: "Server Error"
    });
  }
};