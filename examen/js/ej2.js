var contactos = [{nombre: "pepe", apellidos: "gonzalez", numero: 345345345, toString: function () {
        return "nombre: " + this.nombre + ", apellidos: " + this.apellidos + ", telefono: " + this.numero;
    }}, {nombre: "jose", apellidos: "ruiz", numero: 567567567, toString: function () {
        return "nombre: " + this.nombre + ", apellidos: " + this.apellidos + ", telefono: " + this.numero;
    }}];

function validar() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apell").value;
    var numero = document.getElementById("telf").value;

    var nombreBienFormado = true;
    var apellBienFormado = true;
    var numBienFormado = true;

    var errores = "";

    if(!(/(.*[a-z]){3,}/i).test(nombre)){
        nombreBienFormado = false;
        errores += "Nombre mal formado.\n";
    }
    if (!(/(.*[a-z]){4,}/i).test(apellidos)) {
        apellBienFormado = false;
        errores += "Apellidos mal formado.\n";
    }
    if(!(/^\d{9}$/.test(numero))) {
        numBienFormado = false;
        errores += "Numero mal formado";
    }

    if (!nombreBienFormado || !apellBienFormado || !numBienFormado) alert("Se han encontrado los siguientes errores:\n" + errores);

    return nombreBienFormado && apellBienFormado && numBienFormado;
}

function introducirContacto() {
    if (!validar()) return;

    var nomb = document.getElementById("nombre").value;
    var apell = document.getElementById("apell").value;
    var num = document.getElementById("telf").value;

    var contacto = {nombre: nomb, apellidos: apell, numero: num, toString: function () {
            return "nombre: " + this.nombre + ", apellidos: " + this.apellidos + ", telefono: " + this.numero;
        }};
    contactos.push(contacto);

    document.getElementById("nombre").value = "";
    document.getElementById("apell").value = "";
    document.getElementById("telf").value = "";

    alert("Contacto añadido: " + contacto.toString());
}

function borrarContacto() {
    var nomb = document.getElementById("nombre").value;

    if (nomb === "" || !(/(.*[a-z]){3,}/i).test(nomb)) {
        alert("No has introducido bien el nombre.");
        return;
    }

    var contador = 0;
    while (true){
        if (contador >= contactos.length) break;
        var contacto = contactos[contador];

        if(contacto.nombre.toLowerCase() === nomb.toLowerCase()){
            var previoa = contactos.slice(0, contador);
            var posta = contactos.slice(contador + 1, contactos.length);

            contactos = previoa.concat(posta);
        }
        contador++;
    }

}

function buscarContacto() {
    var nomb = document.getElementById("nombre").value;

    if (nomb === "" || !(/(.*[a-z]){3,}/i).test(nomb)) {
        alert("No has introducido bien el nombre.");
        return;
    }

    var contactosTemporal = [];

    for (var x = 0; x < contactos.length; x++){
        var contacto = contactos[x];
        if (contacto.nombre.toLowerCase() === nomb.toLowerCase()) contactosTemporal.push(contacto)
    }
    mostrarContactos(contactosTemporal)
}

function buscarContactoComodin() {
    var nomb = document.getElementById("nombre").value;
    if (nomb === "") {
        alert("No has introducido bien el carácter.");
        return;
    }

    var contactosTemporal = [];

    for (var x = 0; x < contactos.length; x++){
        var contacto = contactos[x];
        if (contacto.nombre.toLowerCase().split("").includes(nomb.toLowerCase())) contactosTemporal.push(contacto)
    }

    mostrarContactos(contactosTemporal)
}

function mostrarContactos(elemento) {
    var tabla = document.getElementById("tabla");
    tabla.innerText = "";

    var head = document.createElement("tr");
    var hNomb = document.createElement("th");
    var hApell = document.createElement("th");
    var hNum = document.createElement("th");

    hNomb.textContent = "Nombre";
    hApell.textContent = "Apellidos";
    hNum.textContent = "Teléfono";

    head.appendChild(hNomb);
    head.appendChild(hApell);
    head.appendChild(hNum);

    tabla.appendChild(head);

    for (var x = 0; x < elemento.length; x++) {
        var nombre = document.createElement("td");
        var apell = document.createElement("td");
        var num = document.createElement("td");

        var tr = document.createElement("tr");
        var contacto = elemento[x];
        nombre.textContent = contacto.nombre;
        apell.textContent = contacto.apellidos;
        num.textContent = contacto.numero;

        tr.appendChild(nombre);
        tr.appendChild(apell);
        tr.appendChild(num);

        tabla.appendChild(tr);
    }
}