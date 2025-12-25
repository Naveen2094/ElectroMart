fetch("../backend/get-orders.php")
  .then(res => res.json())
  .then(orders => {
    const container = document.getElementById("orders-container");

    if (!orders || orders.length === 0) {
      container.innerHTML = "<p>No orders found.</p>";
      return;
    }

    orders.forEach(order => {
      const div = document.createElement("div");
      div.className = "admin-order";

      let itemsHtml = "";
      order.items.forEach(item => {
        itemsHtml += `
          <li>
            ${item.product_name} — ₹${item.price} × ${item.quantity}
          </li>
        `;
      });

      div.innerHTML = `
        <h3>Order #${order.id}</h3>
        <p><strong>Name:</strong> ${order.customer_name}</p>
        <p><strong>Address:</strong> ${order.address}</p>
        <p><strong>Payment:</strong> ${order.payment_method}</p>
        <p><strong>Total:</strong> ₹${order.total_amount}</p>

        <ul class="order-items">
          ${itemsHtml}
        </ul>
      `;

      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Failed to load orders", err);
  });
