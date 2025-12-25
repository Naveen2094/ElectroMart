// Generate fake order ID
const orderId = "EM" + Math.floor(Math.random() * 1000000);
document.getElementById("order-id").innerText = orderId;

// Clear cart after order success
localStorage.removeItem("cart");
