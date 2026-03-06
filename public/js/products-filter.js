// checks if the script is loaded on the products page
console.log("products.filter.js loaded");

// grabs the products grid by id
const productsGrid = document.querySelector("#productsGrid");
console.log("productGrid found?", Boolean(productsGrid));

const searchInput = document.querySelector("#searchInput");
console.log("searchInput found?", Boolean(searchInput));

// Listens for typing in the search bar
searchInput.addEventListener("input", () => {
  // gets the text the user typed
  const searchText = searchInput.value;
  console.log("input event searchText:", searchText);
  // confirm it works
  //console.log("User typed:", searchText);

  fetchProducts(searchText);
});

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
async function fetchProducts(searchText = "") {
  console.log("fetchProduct searchText:", searchText);
  try {
    // Calls the REST API endpoint
    const response = await fetch(`/api/products?search=${searchText}`);

    // convert response into a javascript object
    const responseData = await response.json();

    console.log("response data from api:", responseData);

    // Extract the array of products from the API response
    const products = responseData.data;

    // convert each product into html using createProductsCard()
    // map() loops through the array and returns new html for each product
    const productsHTML = products.map(createProductCard).join("");

    // replace the current data in the grid with the new product cards
    // innerHTML updates the DOM without refreshing the page
    productsGrid.innerHTML = productsHTML

  } catch (err) {
    console.log("Fetch products errer:", err)
  }
}

fetchProducts();