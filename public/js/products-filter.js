// checks if the script is loaded on the products page
console.log("products.filter.js loaded");

// finds the container where product cards will be displayed on the products page
const productsGrid = document.querySelector("#productsGrid");
console.log("productGrid found?", Boolean(productsGrid));

// finds the search input on the products page
const searchInput = document.querySelector("#searchInput");
console.log("searchInput found?", Boolean(searchInput));

// finds the category dropdown on the products page
const categorySelect = document.querySelector("#categorySelect");
console.log("categorySelect found?", Boolean(categorySelect));

// finds the sort select dropdown on the products page
const sortSelect = document.querySelector("#sortSelect");
console.log("sortSelect found", Boolean(sortSelect));

// Listens for typing in the search bar
searchInput.addEventListener("input", () => {
  // gets the text the user typed
  const searchText = searchInput.value;
  console.log("input event searchText:", searchText);

  // gets the category currently selected
  const selectedCategory = categorySelect.value;

  // get the sort option currently selected
  const selectedSort = sortSelect.value;
  
  //console.log("User typed:", searchText);

  fetchProducts(searchText, selectedCategory, selectedSort);
});

// Listens for changes in the category dropdown 
categorySelect.addEventListener("change", () => {
  const searchText = searchInput.value;

  // Get the category selected by the user
  const selectedCategory = categorySelect.value;

  //console.log("Selected category:", selectedCategory);

  const selectedSort = sortSelect.value;

  fetchProducts(searchText, selectedCategory, selectedSort);
});

// Listens for changes in the sort dropdown
sortSelect.addEventListener("change", () => {
  const searchText = searchInput.value;

  const selectedCategory = categorySelect.value;

  const selectedSort = sortSelect.value;
  console.log("Selected sort:", selectedSort);

  fetchProducts(searchText, selectedCategory, selectedSort);
})

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
async function fetchProducts(searchText = "", selectedCategory = "", selectedSort = "") {
  console.log("fetchProduct searchText:", searchText);
  try {
    // Calls the REST API endpoint
    const response = await fetch(`/api/products?search=${searchText}&category=${selectedCategory}&sort=${selectedSort}`);

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