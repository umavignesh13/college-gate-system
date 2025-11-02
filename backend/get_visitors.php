<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
include 'db.php';

$sql = "SELECT * FROM visitors ORDER BY check_in DESC";
$result = $conn->query($sql);

$visitors = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $visitors[] = $row;
    }
}

echo json_encode($visitors);
$conn->close();
?>
