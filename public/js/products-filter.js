// checks if the script is loaded on the products page
console.log("products.filter.js loaded");

// grabs the products grid by id
const productsGrid = document.querySelector("#productsGrid");
console.log("productGrid found?", Boolean(productsGrid));

// this creates the HTML for a single product card
// receives a product object from the API and returns a string of HTML
function createProductCard(product) {
  return `
    <a href="/products/${product.id}" class="product-card">
      <div class="product-image">
        <img src="${product.image_path}" alt="${product.name}">
      </div>

      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="price">${product.price}</p>
      </div>
    </a>    
  `;
}

// Fetches product from API and renders them in the grid on the page
async function fetchProducts() {
  try {
    // Calls the REST API endpoint
    const response = await fetch("/api/products");

    // convert response into a javascript object
    const responseData = await response.json();

    console.log("API response:", responseData)

    // Extract the array of products from the API response
    const products = responseData.data;

    // convert each product into html using createProductsCard()
    // map() loops through the array and returns new html for each product
    const productsHTML = products.map(createProductCard).join("");

    // replace the current data in the grid with the new product cards
    // innerHTML updates the DOM without refreshing the page
    productsGrid.innerHTML = productsHTML

  } catch (err) {
    console.log("Network errer:", err)
  }
}

fetchProducts();