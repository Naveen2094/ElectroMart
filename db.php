<?php
$conn = new mysqli("localhost", "root", "", "electromart");

if ($conn->connect_error) {
  echo json_encode([
    "success" => false,
    "message" => "Database connection failed"
  ]);
  exit;
}
?>
