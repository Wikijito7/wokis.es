var lista = false;
var navlist = document.getElementById("nav");

function toggleList() {
    // if(window.outerWidth > 760) return;
        if (lista){
            navlist.classList.replace("visible", "invisible");
        } else navlist.classList.replace("invisible", "visible");

        lista = !lista;
}
