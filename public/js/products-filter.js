// checks if the script is loaded on the products page
console.log("products.filter.js loaded");

// grabs the products grid by id
const productsGrid = document.querySelector("#productsGrid");
console.log("productGrid found?", Boolean(productsGrid));

async function fetchProducts() {
  try {
    const response = await fetch("/api/products");

    const responseData = await response.json();
  } catch (err) {
    console.log("Network errer:", err)
  }
}