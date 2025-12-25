<?php
include "db.php";

$ordersQuery = "
SELECT * FROM orders
ORDER BY created_at DESC
";

$ordersResult = $conn->query($ordersQuery);

$orders = [];

while ($order = $ordersResult->fetch_assoc()) {
  $orderId = $order["id"];

  $itemsQuery = "
    SELECT product_name, price, quantity
    FROM order_items
    WHERE order_id = $orderId
  ";

  $itemsResult = $conn->query($itemsQuery);
  $items = [];

  while ($item = $itemsResult->fetch_assoc()) {
    $items[] = $item;
  }

  $order["items"] = $items;
  $orders[] = $order;
}

echo json_encode($orders);
?>
