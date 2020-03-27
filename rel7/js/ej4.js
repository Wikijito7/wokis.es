function validar(){
    var campo1 = document.getElementById("campo1");
    var campo2 = document.getElementById("campo2");
    var dni = document.getElementById("postal");
    var postal = document.getElementById("dni");
    var email = document.getElementById("email");

    var malFormado = false;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var dniRegex = /^\d{8}[A-Z]$/;

    if (campo1.value === "" || comprobarTexto){
        campo1.style.background = "red";
        malFormado = true;
    }

    if (campo2.value === ""){
        campo2.style.background = "red";
        malFormado = true;
    }
    if (email.value === "" || !(emailRegex.test(email.value))){
        email.style.background = "red";
        malFormado = true;
    }

    if (dni.value === "" || !(dniRegex.test(dni.value))){
        dni.style.background = "red";
        malFormado = true;
    }

    if (postal.value === "" || postal.value.length > 5){
        postal.style.background = "red";
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