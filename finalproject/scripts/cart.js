






let cart = JSON.parse(localStorage.getItem("vjutechCart")) || [];

loadCart();

// Load cart items into UI
function loadCart() {
    const container = document.querySelector('#cart-container');
    container.innerHTML = "";

    if(cart.length === 0){
        container.innerHTML = "<p>Your cart is empty.</p>";
        updateSummary();
        return;
    }

    cart.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-img">

            <div class="cart-info">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>

                <label>Quantity:</label>
                <input type="number" value="${item.quantity}" min="1" class="qty-input">

                <button class="remove-btn">Remove</button>
            </div>
        `;

        // Handle quantity changes
        div.querySelector(".qty-input").addEventListener("change", (e) => {
            const newQty = parseInt(e.target.value);
            updateQuantity(item.id, newQty);
        });

        // Handle remove button
        div.querySelector(".remove-btn").addEventListener("click", () => {
            removeFromCart(item.id);
        });

        container.appendChild(div);
    });

    updateSummary();
}

// Update item quantity
function updateQuantity(id, newQty) {
    const product = cart.find(p => p.id === id);

    if(product) {
        product.quantity = newQty;
        localStorage.setItem("vjutechCart", JSON.stringify(cart));
        loadCart();
    }
}

// Remove item from cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("vjutechCart", JSON.stringify(cart));
    loadCart();
}

// Initial summary calculation
const totalCost = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
document.getElementById("total-cost").textContent = totalCost.toFixed(2);


// Update cart totals
function updateSummary() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalCost = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    document.getElementById("total-items").textContent = totalItems;
    document.getElementById("total-cost").textContent = totalCost.toFixed(2);

    // Store for checkout page
    localStorage.setItem("vjutechTotal", totalCost.toFixed(2));
}

