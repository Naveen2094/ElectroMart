console.log("main.js loaded ✅");

// ---------- CART COUNT ----------
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const el = document.getElementById("cart-count");
  if (!el) return;

  const totalQty = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );
  el.innerText = totalQty;
}
updateCartCount();

// ---------- QUANTITY CONTROL ----------
function changeQty(btn, delta) {
  const qtySpan = btn.parentElement.querySelector(".qty-value");
  let qty = parseInt(qtySpan.innerText);
  qty = Math.max(1, qty + delta);
  qtySpan.innerText = qty;
}

// ---------- ADD TO CART ----------
function addToCart(button) {
  const card = button.closest(".product-card");
  const name = card.querySelector("h3").innerText;
  const price = card.querySelector(".price").innerText;
  const qty = parseInt(card.querySelector(".qty-value").innerText);

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.quantity += qty;
  } else {
    const imgSrc = card.querySelector("img").getAttribute("src");

cart.push({
  name,
  price,
  quantity: qty,
  image: imgSrc
});
  }
 // 🔥 UX FEEDBACK
  const originalText = button.innerText;
  button.innerText = "Added to Cart ✔";
  button.disabled = true;

  setTimeout(() => {
    button.innerText = originalText;
    button.disabled = false;
  }, 1200);
  localStorage.setItem("cart", JSON.stringify(cart));
  card.querySelector(".qty-value").innerText = "1";
  updateCartCount();
}

// ---------- NAVBAR USER ----------
const userArea = document.getElementById("user-area");

if (userArea) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    userArea.innerHTML = `
      <span class="nav-user">👤 ${user.name}</span>
      <button class="logout-btn" onclick="logout()">Logout</button>
    `;
  }
}

function logout() {
  localStorage.removeItem("user");
  localStorage.removeItem("cart");
  window.location.href = "login.html";
}
