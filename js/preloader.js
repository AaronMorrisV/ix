var overlay = document.getElementById("overlay");
var body = document.getElementById("body");

setTimeout(function(){
    overlay.style.opacity = 0;
    setTimeout(function(){ body.style.overflow = 'visible';}, 1000);
    setTimeout(function(){ overlay.style.display = 'none';}, 2000);
}, 2000);
