<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
include 'db.php';

$id = $_POST['id']; // visitor ID to check out

$sql = "UPDATE visitors SET check_out = NOW() WHERE id = $id";

if ($conn->query($sql) === TRUE) {
    echo "Visitor Checked Out Successfully";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
