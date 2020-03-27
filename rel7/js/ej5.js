function validar(){
    //Texto
    var nombre = document.getElementById("nombre");
    var apell = document.getElementById("apell");
    var dir = document.getElementById("dir");
    var coment = document.getElementById("coment");
    //Numeros
    var postal = document.getElementById("postal");
    var tlf = document.getElementById("tlf");
    var edad = document.getElementById("edad");
    //Email
    var email = document.getElementById("email");
    //Select
    var prov = document.getElementById("prov");
    var sexo = document.getElementById("sexo");
    //Checkbox
    var cg = document.getElementById("cg");
    var al = document.getElementById("al");

    var malFormado = false;
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var dniRegex = /^\d{8}[A-Z]$/;
    var tlfRegex = /^\d{9}$/;

    if (nombre.value === "" || !comprobarTexto(nombre.value)){
        nombre.style.background = "red";
        malFormado = true;
    }

    if (apell.value === "" || !comprobarTexto(nombre.value)){
        apell.style.background = "red";
        malFormado = true;
    }

    if (dir.value === ""){
        dir.style.background = "red";
        malFormado = true;
    }

    if (coment.value === ""){
        coment.style.background = "red";
        malFormado = true;
    }

    if (email.value === "" || !(emailRegex.test(email.value))){
        email.style.background = "red";
        malFormado = true;
    }

    if (tlf.value === ""  || !(tlfRegex.test(tlf.value))){
        tlf.style.background = "red";
        malFormado = true;
    }

    if (edad.value === ""){
        edad.style.background = "red";
        malFormado = true;
    }

    if (postal.value === "" || postal.value.length > 5){
        postal.style.background = "red";
        malFormado = true;
    }

    if(prov.selectedIndex === 0){
        prov.style.background = "red";
        malFormado = true;
    }

    if(sexo.selectedIndex === 0){
        sexo.style.background = "red";
        malFormado = true;
    }

    if(!cg.checked){
        cg.style.background = "red";
        malFormado = true;
    }

    if(!al.checked) {
        al.style.background = "red";
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