let cart = JSON.parse(localStorage.getItem("vjutechCart")) || [];

displayCart();

// DISPLAY CART FUNCTION
function displayCart(){
    const container = document.querySelector('#cart-container');
    container.innerHTML = "";

    if(cart.length === 0){
        container.innerHTML = "<h2>Your cart is empty</h2>";
        return;
    }

    cart.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price} × ${product.quantity}</p>
            <p><strong>Total:</strong> $${(product.price * product.quantity).toFixed(2)}</p>
            <button class="remove" data-id="${product.id}">Remove</button>
        `;

        container.appendChild(div);

        
    });

    document.querySelectorAll(".remove").forEach(btn=>{
        btn.addEventListener("click", removeFromCart);
    });
}

// Remove from Cart Function
function removeFromCart(e){
    const id = parseInt(e.target.dataset.id);
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("vjutechCart", JSON.stringify(cart));
    displayCart();
}
