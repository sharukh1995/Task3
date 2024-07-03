<?php
// process_form.php

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "form";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];

// Insert the data into the database
$sql = "INSERT INTO data (name, email) VALUES ('$name', '$email')";

if ($conn->query($sql) === TRUE) {
    // Return a JSON response
    echo json_encode(['name' => $name, 'email' => $email]);
} else {
    echo json_encode(['error' => 'Error: ' . $sql . '<br>' . $conn->error]);
}

$conn->close();
?>
