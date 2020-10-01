function sumar() {
  var a = parseInt(prompt("Dame un primer número para hacer una suma.", "5"));
  var b = parseInt(prompt("Dame un segundo número para hacer una suma.", "8"));

  if (!isNaN(a) && !isNaN(b)){
    document.getElementById('res').innerText = "El resultado de la suma " + a + "+" + b + "=" + (a+b);
  } else{
    document.getElementById('res').innerText = "Algo ha salido mal. Alguno de los números no es válido.";
  }
}
