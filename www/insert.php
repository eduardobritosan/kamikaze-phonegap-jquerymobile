<?php
include("connect2.php");

$sql = "INSERT INTO PUNTUACIONES
VALUES ('John', '0000-00-00 00:00:00', '12')";

if ($mysqli->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $mysqli->error;
}
 ?>
