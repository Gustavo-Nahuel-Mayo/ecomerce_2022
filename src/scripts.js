window.onscroll = function() {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("navbarimg");
    
    var elemento3 = document.getElementById("cardid");
    
    elemento1.style.bottom = posicion * 0.3 + "px";
    elemento3.style.bottom = posicion * 0.3 + "px";

}