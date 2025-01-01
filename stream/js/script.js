var conection = "Estableciendo conexión...";
var gracias = document.getElementById("mensaje").textContent;
var cerrCon = "Fin del mensaje."
var x = 0;
consoleText();
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function consoleText() {

  for (var i = 0; i < 7; i++) {

    if (i % 2 === 0) {
      document.getElementById("text").innerHTML = "_";
    } else {
      document.getElementById("text").innerHTML = "";
    }

    await new Promise(r => setTimeout(r, 200));
  }

  var currentString = "";

  for (var variable of conection) {
    currentString += variable;
    document.getElementById("text").innerHTML = currentString;
    await new Promise(r => setTimeout(r, 80));
  }

  await new Promise(r => setTimeout(r, 1000));

  currentString += "<br><br>"
  document.getElementById("text").innerHTML = currentString;

  for (var variable of gracias) {
    currentString += variable;
    document.getElementById("text").innerHTML = currentString;
    await new Promise(r => setTimeout(r, 70));
  }

  currentString += "<br><br>"
  document.getElementById("text").innerHTML = currentString;

  for (var variable of cerrCon) {
    currentString += variable;
    document.getElementById("text").innerHTML = currentString;
    await new Promise(r => setTimeout(r, 100));
  }
  await new Promise(r => setTimeout(r, 500));
}
