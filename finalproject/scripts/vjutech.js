let cart = JSON.parse(localStorage.getItem("vjutechCart")) || [];

// GLOBAL VARIABLES FOR FILTERING
let allProducts = [];  // full list from JSON
let filteredProducts = []; // what is currently displayed

updateCartCount();

// ASYNC LOAD JSON DATA
async function jsonFileFetch() {
  try {
    const response = await fetch('data/products.json');
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // test output
      // ⭐ STORE PRODUCTS FOR FILTERING
      allProducts = data.products;
      filteredProducts = allProducts;

      displayResults(data.products); // <-- FIXED
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
};

// DISPLAY FUNCTION
function displayResults(data) {

  const productsGrid = document.querySelector('#products-grid');

  data.forEach(product => {
    const aside = document.createElement("aside");
    aside.classList.add("product-card");
    aside.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy" class="product-img">
      <h3>${product.name}</h3>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Quantity:</strong>
      <select class="qty-select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      </select></p>
      <p>${product.description}</p>
      <button class="add-to-cart">Add to Cart</button>
    `;
    // Add event listener for Add to Cart button
    aside.querySelector('.add-to-cart').addEventListener("click", () => {
      const quantity = parseInt(aside.querySelector('.qty-select').value);
      addToCart(product, quantity);
    });
  
    productsGrid.appendChild(aside);
  });
}


// Add to Cart Function
function addToCart(product, quantity) {

  const existing = cart.find(item => item.id === product.id);

  if(existing){
      existing.quantity += quantity;
  } else {
      cart.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantity
      });
  }

  updateCartCount();
  localStorage.setItem("vjutechCart", JSON.stringify(cart));
}


// Update Cart number in header
function updateCartCount(){
  const counter = document.querySelector('header aside h1');

  let total = 0;
  cart.forEach(item => total += item.quantity);

  counter.textContent = total;
}

// FILTER FUNCTION
function applyFilters() {
  const searchValue = document.querySelector("#searchInput").value.toLowerCase();
  const categoryValue = document.querySelector("#categoryFilter").value;

  filteredProducts = allProducts.filter(product => {

    const matchesCategory = 
      categoryValue === "all" || product.category.toLowerCase() === categoryValue;

    const matchesSearch = 
      product.name.toLowerCase().includes(searchValue) ||
      product.description.toLowerCase().includes(searchValue);

    return matchesCategory && matchesSearch;
  });
  // CLEAR CURRENT DISPLAY
  document.querySelector('#products-grid').innerHTML = "";
  // DISPLAY FILTERED RESULTS
  displayResults(filteredProducts);
}
// EVENT LISTENERS FOR FILTERS
document.querySelector("#searchInput").addEventListener("input", applyFilters);
document.querySelector("#categoryFilter").addEventListener("change", applyFilters);

// RUN SCRIPT
jsonFileFetch();