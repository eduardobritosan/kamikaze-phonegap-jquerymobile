<?php
$mysqli = new mysqli("mysql13.000webhost.com", "a4706323_ebritos", "database", "a4706323_AMP");

/* comprueba la conexión */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
?>
