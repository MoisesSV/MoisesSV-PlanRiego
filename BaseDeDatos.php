<?php
//1. conexion a la base de datos.

//parametros de conexion
$u = "root";
$h = "localhost";
$p = "";
$db = "plan_riego";

$conexion = mysqli_connect($h, $u, $p, $db);

//2.ejecutar un QUERY

$query = "select * from humedad;";
$resultado = mysqli_query($conexion, $query);



//3.mostar los resultados del QUERY anterior
//echo $resultado;

?>
<table border="1">
    <div>
    <tr>
        <th> Id.</th>
        <br>
        <th> Fecha.</th>
        <br>
        <th> Hora.</th>
        <th> Nivel de Humedad.</th>
    </tr>




    <?php


    while ($arreglo = mysqli_fetch_array($resultado)) {
        echo "<tr>";
        //echo $arreglo[0];
        echo (json_encode($arreglo));
        echo "<td>" . $arreglo[0] . "</td>";
        echo "<td>" . $arreglo[1] . "</td>";
        echo "<td>" . $arreglo[2] . "</td>";
        echo "<td>" . $arreglo[3] . "</td>";
        echo "</tr>";
    }

    //print_r($arreglo);
    //var_dump($arreglo);


    ?>

</table>
</div>
<br><br>

<?php

//teperatura
$query = "select * from temperatura;";
$resultado = mysqli_query($conexion, $query);



//3.mostar los resultados del QUERY anterior
//echo $resultado;

?>
<div>
    <table border="1">
        <tr>
            <th> Id.</th>
            <th> Fecha.</th>
            <th> Hora.</th>
            <th> Nivel de Humedad.</th>
        </tr>

        <?php

        while ($arreglo = mysqli_fetch_array($resultado)) {
            echo "<tr>";
            echo( json_encode("{"."id: ". "'"
            .$arreglo[0]."' 'Fecha: "
            .$arreglo[1]."' 'Hora: "
            .$arreglo[2]."' 'Nivel de Humedad: "
            .$arreglo[3]."}"."<br>")
        );
       echo "<td>" . $arreglo[0] . "</td>";
        echo"<td>" . $arreglo[1] . "</td>";
        echo "<td>" . $arreglo[2] . "</td>";
        echo "<td>" . $arreglo[3] . "</td>";
        echo "</tr>";

        }
        ?>

    </table>
    */
</div>
<br><br>

<?php
//tiempo_riego
$query = "select * from tiempo_riego;";
$resultado = mysqli_query($conexion, $query);

//3.mostar los resultados del QUERY anterior
//echo $resultado;

?>

<table border="1">
    <tr>
        <th> Id.</th>
        <th> Fecha.</th>
        <th> Hora.</th>
        <th> Nivel de Humedad.</th>
    </tr>


    <?php


    while ($arreglo = mysqli_fetch_array($resultado)) {
        echo "<tr>";
        //echo $arreglo[0];
        echo (json_encode($arreglo)."<br>");
        echo "<td>" . $arreglo[0] . "</td>";
        echo "<td>" . $arreglo[1] . "</td>";
        echo "<td>" . $arreglo[2] . "</td>";
        echo "<td>" . $arreglo[3] . "</td>";
        echo "</tr>";
    }


    ?>

</table>