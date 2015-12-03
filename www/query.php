<?php  /* devuelve el nombre de la base de datos actualmente seleccionada */
include("connect2.php");


$output = array();

if ($result = $mysqli->query("SELECT NOMBRE,FECHA,PUNTUACION FROM PUNTUACIONES")) {
    while($row = $result->fetch_row()){
      $output[  ] = $row;
    }

    echo json_encode(array('status' => 'success', 'items' => $output));

    $result->close();
}
?>
