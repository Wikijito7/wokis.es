function validar(){
    var nombre = document.getElementById("nombre");
    var edad = document.getElementById("edad");
    var correo = document.getElementById("correo");
    var nac = document.getElementById("nac");
    var opc = document.getElementById("opc");
    var check = document.getElementById("check");

    var malFormado = false;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (nombre.value === "" || comprobarTexto){
        nombre.style.background = "red";
        malFormado = true;
    }

    if (edad.value === ""){
        edad.style.background = "red";
        malFormado = true;
    }
    if (correo.value === "" || !(emailRegex.test(correo.value))){
        correo.style.background = "red";
        malFormado = true;
    }

    if (nac.value === ""){
        nac.style.background = "red";
        malFormado = true;
    }

    if (opc.selectedIndex === 0){
        opc.style.background = "red";
        malFormado = true;
    }

    if (!check.checked){
        opc.style.background = "red";
        malFormado = true;
    }

    if (!malFormado){
        alert("Todo ha sido formado correctamente.");
    }
}

function comprobarTexto(texto) {
    for (var x = 0; x < texto.length; x++){
        if(!isNaN(parseInt(texto.charAt(x)))) return false;
    }
    return true;
}