

window.onscroll = function() {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var posicion2 = window.pageYOffset || document.documentElement.scrollBottom;
    var elemento1 = document.getElementById("navbarimg");
    var elemento2 = document.getElementById("Redes")
    var elemento3 = document.getElementById("cardid");
    
    elemento1.style.bottom = posicion * 0.3 + "px";
    elemento2.style.bottom = posicion2 * 0.3 + "px";
    elemento3.style.bottom = posicion * 0.3 + "px";

}
