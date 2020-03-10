function mostrarEnPantalla(res) {
    document.getElementById("res").value = res;
}

function mostrarNuevaPantalla(res) {
    var otraVentana = window.open("testasdas", "ResultadoExponente", "width=320,height=240");
    otraVentana.document.write(res)
}

function calcular() {
    var base = parseInt(document.getElementById("base").value);
    var exp = parseInt(document.getElementById("exp").value);
    var resultado = 1;

    if(isNaN(base) || isNaN(exp)){
        alert("Has introducido incorrectamente los datos. Sólo se aceptan números enteros.");
        return;
    }

    if (base <= 0 || exp < 0) {
        alert("Has introducido incorrectamente los datos. Comprueba que la base sea mayor que 0 o que el exponente sea positivo");
        return;
    }
    debugger
    if (exp === 0) return 1;

    while (true) {
        if (exp === 0){
            break;
        }
        exp--;
        resultado *= base;
    }

    return resultado;
}