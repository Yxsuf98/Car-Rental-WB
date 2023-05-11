<?php
session_start();

// Check if user is not logged in
if (!isset($_SESSION['user_id'])) {
    header('Location: login.php');
    exit;
}

// Connect to database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "rentmycar";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form was submitted for editing a vehicle
if (isset($_POST['edit_vehicle'])) {
    $vehicle_id = $_POST['vehicle_id'];
    $vehicle_make = $_POST['vehicle_make'];
    $vehicle_model = $_POST['vehicle_model'];
    $vehicle_bodytype = $_POST['vehicle_bodytype'];
    $fuel_type = $_POST['fuel_type'];
    $mileage = $_POST['mileage'];
    $location = $_POST['location'];
    $year = $_POST['year'];
    $num_doors = $_POST['num_doors'];
    $video_url = $_POST['video_url'];
    $image_url = $_POST['image_url'];
}
    // Update vehicle details in database
    $sql = "UPDATE vehicle_details SET vehicle_make = '$vehicle_make', vehicle_model = '$vehicle_model', vehicle_bodytype = '$vehicle_bodytype',