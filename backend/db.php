<?php
// db.php - database connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "gate_entry_system";
$port = 3307; // change this if your MySQL uses another port

$conn = new mysqli($servername, $username, $password, $database, $port);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
