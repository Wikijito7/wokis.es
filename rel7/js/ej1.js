function validar() {
    var bienFormado = true;
    if (document.getElementById("j1").value === ""){
        document.getElementById("j1").style.background = "red";
        bienFormado = false;
    }


    if (document.getElementById("j2").value === ""){
        document.getElementById("j2").style.background = "red";
        bienFormado = false;
    }

    if (document.getElementById("j3").value === ""){
        document.getElementById("j3").style.background = "red";
        bienFormado = false;
    }

    if (bienFormado){
        alert("Has introducido bien los datos.");
        document.getElementById("j1").value = "";
        document.getElementById("j2").value = "";
        document.getElementById("j3").value = "";
    }
}

