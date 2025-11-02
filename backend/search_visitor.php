<?php
include 'db.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$input = $_GET['q'];
$sql = "SELECT * FROM visitors WHERE contact='$input' OR name LIKE '%$input%' LIMIT 1";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode($result->fetch_assoc());
} else {
    echo json_encode(["message" => "No record found"]);
}
?>
