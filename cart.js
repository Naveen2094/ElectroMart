let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItemsDiv = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");
const cartCountEl = document.getElementById("cart-count");
const clearCartBtn = document.getElementById("clear-cart");

renderCart();

function renderCart() {
  cartItemsDiv.innerHTML = "";

  // ✅ EMPTY CART STATE
  if (cart.length === 0) {
    cartItemsDiv.innerHTML = `
      <div class="empty-cart">
        <h3>🛒 Your cart is empty</h3>
        <p>Looks like you haven’t added anything yet.</p>
        <a href="products.html" class="hero-btn">Shop Now</a>
      </div>
    `;
    totalPriceEl.innerText = 0;
    cartCountEl.innerText = 0;
    return;
  }

  let total = 0;
  let totalQty = 0;

  cart.forEach((item, index) => {
    const price = parseInt(item.price.replace(/[^0-9]/g, ""));
    const qty = item.quantity || 1;
    const subtotal = price * qty;

    total += subtotal;
    totalQty += qty;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <div class="cart-product">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-info">
          <h4>${item.name}</h4>
          <p>₹${price}</p>
          <p class="subtotal">Subtotal: ₹${subtotal}</p>
        </div>
      </div>

      <div class="cart-qty">
        <button onclick="changeCartQty(${index}, -1)">−</button>
        <span>${qty}</span>
        <button onclick="changeCartQty(${index}, 1)">+</button>
      </div>

      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;

    cartItemsDiv.appendChild(div);
  });

  totalPriceEl.innerText = total;
  cartCountEl.innerText = totalQty;
  localStorage.setItem("cart", JSON.stringify(cart));
}


function changeCartQty(index, delta) {
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) cart.splice(index, 1);
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

clearCartBtn.addEventListener("click", () => {
  cart = [];
  localStorage.setItem("cart", JSON.stringify([]));
  renderCart();
});
