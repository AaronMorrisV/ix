(function(){

  var parallax = document.querySelectorAll(".parallax"),
      speed = 0.3;

  

    
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };
    
    if(isMobileDevice()){
        
    }
    else{
        window.onscroll = function(){
        [].slice.call(parallax).forEach(function(el,i){

          var windowYOffset = window.pageYOffset,
              elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

          el.style.backgroundPosition = elBackgrounPos;

        });
      };
    }
})();