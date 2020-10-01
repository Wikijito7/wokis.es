<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="IE=edge">
    <title>Practica DAWC</title>
    <link rel="stylesheet" href="./css/stylesheet.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet">
  </head>
  <body>
    <header>
      <h1>Despliegue Ejemplo subir webs</h1>
      <a class="boton" href="http://andradesc.atwebpages.com">Ir a la otra web.</a>
    </header>
    <article>
      <div class="container">
        <!--http://www.chiquitoipsum.com-->
        <p>Lorem fistrum benemeritaar la caidita jarl sexuarl. Benemeritaar te va a
          hasé pupitaa te voy a borrar el cerito qué dise usteer a peich diodenoo
          qué dise usteer. Quietooor a peich llevame al sircoo tiene musho peligro.
          Pecador a gramenawer torpedo torpedo ese pedazo de te va a hasé pupitaa.
          Sexuarl de la pradera ese hombree al ataquerl te va a hasé pupitaa.
          <br>
        </p>
        <!--Imagen de https://picsum.photos-->
        <img src="./img/img.jpg">
      </div>
        <div class="container">
          <h2>Tabla de multiplicar del 5.</h2>
          <table>
            <?php
              $i = 5;
              for ($x=1; $x <= 10; $x++) {
                echo "<tr><td>" . $i . "x" . $x ."</td>";
                echo "<td>" . $i * $x . "</td></tr>";
              }
            ?>
          </table>
        </div>

        <div class="container">
          <h2>Sumar dos números.</h2>
          <p onclick="sumar()" id="sumar" class="boton">¡Sumar!</p> <!--Idea del botón para la suma de infolojo.-->
          <p id="res"></p>
        </div>
    </article>
    <footer>
        Wokis' website <span id="coded"><i class="fas fa-code"></i></span> with <span id="love"><i class="fas fa-heart"></i></span> by Wokis.<br>
        Copyright © 2020 Wokis.<br>
        <a href="https://github.com/Wikijito7/Wikijito7.github.io">I'm open source!</a>
    </footer>
    <script defer src="./js/script.js"></script>
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"></script>
  </body>
</html>
