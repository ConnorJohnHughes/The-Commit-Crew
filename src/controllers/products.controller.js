// Products API Controller
//import { getAllProducts } from "../services/products.service.js";
// import { connection } from "../model/db.connect.js";
import { getFilteredProducts, getProductID, getAllProducts } from "../services/products.service.js";

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

export const getProductsById = async (req, res) => {
  try {
  const  {id}  = req.params;

  console.log(id);
  const product = await getProductID(id);

    return res.status(200).json({
      success: true,
      count: product.length,
      data: product
    });

  } catch (error) {
    console.error("Error finding product by ID", error.message);

    return res.status(500).json({
      success: false,
      message: "Something went wrong looking for ID",
      
    });
  };

};


export const allProducts = async (req, res) => {
    try{
      const products = await getAllProducts();

       return res.render('products', {
              title: 'Products',
              products: products
  });
  
  
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Soemthing went wrong!!"
        })
    }
};