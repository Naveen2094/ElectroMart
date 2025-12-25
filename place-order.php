<?php
header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set("display_errors", 0);

include "db.php";

// Read input
$data = json_decode(file_get_contents("php://input"), true);

// Validate required fields
if (
  !$data ||
  !isset($data["customer_name"], $data["address"], $data["payment_method"], $data["total_amount"])
) {
  echo json_encode([
    "success" => false,
    "error" => "Invalid order data"
  ]);
  exit;
}

$customer_name = trim($data["customer_name"]);
$address = trim($data["address"]);
$payment_method = trim($data["payment_method"]);
$total_amount = (int)$data["total_amount"];

// Prepare insert
$stmt = $conn->prepare(
  "INSERT INTO orders (customer_name, address, payment_method, total_amount)
   VALUES (?, ?, ?, ?)"
);

if (!$stmt) {
  echo json_encode([
    "success" => false,
    "error" => "Prepare failed"
  ]);
  exit;
}

$stmt->bind_param(
  "sssi",
  $customer_name,
  $address,
  $payment_method,
  $total_amount
);

if ($stmt->execute()) {
  echo json_encode([
    "success" => true,
    "order_id" => $stmt->insert_id
  ]);
  exit;
}

echo json_encode([
  "success" => false,
  "error" => "Order insert failed"
]);
