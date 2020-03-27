function validar(){
    if (document.getElementById("nac").value === ""){
        document.getElementById("nac").style.background = "red";
    } else {
        var fecha = new Date(document.getElementById("nac").value);
        var fechaActual = new Date();
        var tiempoPasado = (fechaActual - fecha) / (1000 * 3600 * 24 * 365);

        if (tiempoPasado > 0 && tiempoPasado < 101){
            alert("Introducida la fecha correctamente.");
            document.getElementById("nac").value = "";
        } else{
            alert("Sólo aceptamos personas entre 0 a 100 años. Lo siento.");
            document.getElementById("nac").style.background = "red";
            document.getElementById("nac").value = "";
        }
    }
}