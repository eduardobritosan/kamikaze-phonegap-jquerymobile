<?php
include("connect2.php");


$nombre = $_GET['nombre'];
$valor = $_GET['maxValue'];
$ciudad = $_GET['city'];
$id = $_GET['id'];



// $sql = "INSERT INTO PUNTUACIONES
// VALUES (\"$nombre\", '0000-00-00 00:00:00', '12')";

$sql = "INSERT INTO PUNTUACIONES VALUES (\"$id\", \"$nombre\", \"$ciudad\", \"$valor\");";
// $sql = "INSERT INTO PUNTUACIONES VALUES (02, Brito, Chiqui, 1000');";


if ($mysqli->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}


 ?>
