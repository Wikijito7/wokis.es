var lista = false;
var navlist = document.getElementsByClassName("navlist");

function toggleList() {
    if(window.outerWidth > 760) return;
    Array.prototype.forEach.call(navlist, function(navlist) {
        if (lista){
            navlist.classList.replace("visible", "invisible");
            return;
        }
        navlist.classList.replace("invisible", "visible");
    });

    lista = !lista;
}