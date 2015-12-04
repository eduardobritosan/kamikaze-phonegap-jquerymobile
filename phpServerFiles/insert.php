<?php
include("connect2.php");

$nombre = $_GET['nombre'];

$sql = "INSERT INTO PUNTUACIONES
VALUES (\"$nombre\", '0000-00-00 00:00:00', '12')";

if ($mysqli->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}


 ?>
