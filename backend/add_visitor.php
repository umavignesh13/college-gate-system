<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
include 'db.php';

$name = $_POST['name'];
$contact = $_POST['contact'];
$purpose = $_POST['purpose'];

// Validate phone number: 10 digits
if (!preg_match('/^\d{10}$/', $contact)) {
    echo "Error: Phone number must be 10 digits";
    exit;
}

// Check if phone number already exists
$check = "SELECT * FROM visitors WHERE contact='$contact' AND check_out IS NULL";
$result = $conn->query($check);

if ($result->num_rows > 0) {
    echo "Error: Visitor with this phone number already checked in";
    exit;
}

// Insert visitor
$sql = "INSERT INTO visitors (name, contact, purpose) VALUES ('$name', '$contact', '$purpose')";
if ($conn->query($sql) === TRUE) {
    echo "Visitor Added Successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
