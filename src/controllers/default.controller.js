import * as Product from '../model/databaseModel.js';

export const allProducts = async (req, res) => {
    try{
  const products = await Product.getAllProducts();

  res.render('products', {
    title: 'Products',
    products: products
  });
  
} catch (err) {
    console.log(err);
    res.status(500).json({
        message: "Soemthing went wrong!!"
    })
}
};