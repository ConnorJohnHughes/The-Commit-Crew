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



// All products page rendering
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


// products by id page rendering 
export const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await getProductID(id);

    if (!product) {
      return res.status(404).render("404", {
        title: "Product Not Found"
      });
    }

    return res.render("singleProductPage", {
      title: product.name,
      product: product
    });

  } catch (error) {
    console.error("Error finding product by ID", error.message);

    return res.status(500).render("error", {
      title: "Server Error"
    });
  }
};

// products by ID API 
export const productsById = async (req, res) => {
  try {
    const { id } = req. params;
    
    const product = await getProductID(id);

    if(!product){
      return res.status(404).json({
        message: "Could not find product by id",
        id: id
      })
    }

    return res.status(200).json({
      success: true,
      product
    });
  

  } catch (error) {
    console.error("Error finding the product by Id", error.message);

    return res.status(500).json({
      title: "Server Error",
      message: "Could not find product by id",
      
    })
    
  }

}