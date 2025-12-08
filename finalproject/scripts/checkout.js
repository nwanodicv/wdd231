// Load total cost from cart page
const finalTotal = localStorage.getItem("vjutechTotal");
document.getElementById("checkout-total").textContent = finalTotal;

// PAYSTACK PAYMENT
function payWithPaystack() {
    let handler = PaystackPop.setup({
        key: '1662993', // Replace with your Paystack public key
        email: 'customer@example.com',
        amount: finalTotal * 100, // kobo conversion
        currency: '$',
        callback: function (response) {
            alert("Payment successful! Reference: " + response.reference);
            localStorage.removeItem("vjutechCart");
            window.location.href = "success.html";
        },
        onClose: function () {
            alert('Transaction canceled.');
        }
    });
    handler.openIframe();
}

// BANK TRANSFER
function showBankDetails() {
    document.getElementById("extra-info").innerHTML = `
        <h3>Bank Transfer Details</h3>
        <p>Bank: Access Bank</p>
        <p>Account Name: VJuTech Stores</p>
        <p>Account Number: 0123456789</p>
        <p>Send proof of payment to WhatsApp: 08073390967</p>
    `;
}

// PAY ON DELIVERY
function showDeliveryInfo() {
    document.getElementById("extra-info").innerHTML = `
        <h3>Pay on Delivery</h3>
        <p>Your order will be delivered within 1–3 days.</p>
        <p>Payment will be made in cash or POS upon delivery.</p>
    `;
}

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("vjutechCart")) || [];

// DOM Elements
const checkoutList = document.querySelector("#checkout-items");
const checkoutTotal = document.querySelector("#checkout-total");

function loadCheckoutItems() {
  checkoutList.innerHTML = ""; // clear everything

  let grandTotal = 0;

  cart.forEach(item => {
    const lineTotal = item.price * item.quantity;
    grandTotal += lineTotal;

    const row = document.createElement("div");
    row.classList.add("checkout-row");
    row.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>₦${item.price.toLocaleString()}</p>
      <p>Qty: ${item.quantity}</p>
      <p><strong>₦${lineTotal.toLocaleString()}</strong></p>
    `;

    checkoutList.appendChild(row);
  });

  checkoutTotal.textContent = "$" + grandTotal.toLocaleString();
}

// Run on page load
loadCheckoutItems();

