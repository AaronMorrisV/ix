//Changing Header Colour
$(window).on("scroll", function() {
    //Dark Header Background
    if($(window).scrollTop() > 50) {
        $("header").addClass("activeHeader");
    } else {
        $("header").removeClass("activeHeader");
    }
    
    //Dark Video Overlay
    var x = ($(window).scrollTop() + 200)/600;
    document.getElementById("landerVideoDarkOverlay").style.backgroundColor = "rgba(40,40,40," + clamp(x, 0.4, 0.8)+ ")";

});

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}






//Changing Nav Item Colour

var offSet = 50; //For header height

var top1 = $('#home').offset().top - offSet;
var top2 = $('#about').offset().top - offSet;
var top3 = $('#info').offset().top - offSet;
var top4 = $('#team').offset().top - offSet;
var top5 = $('#app').offset().top - offSet;
var top6 = $('#car').offset().top - offSet;
var top7 = $('#sponsorship').offset().top - offSet;
var top8 = $('#gallery').offset().top - offSet;
var top9 = $('#video').offset().top - offSet;

$( document ).ready(function(){
    allFade();
    document.getElementById("homeNavItem").style.color = 'rgb(230,230,230)';
});

$(document).scroll(function() {
  var scrollPos = $(document).scrollTop();
  if (scrollPos >= top1 && scrollPos < top2) {
      //Home
      allFade();
      document.getElementById("homeNavItem").style.color = 'rgb(230,230,230)';
  } else if (scrollPos >= top2 && scrollPos < top3) {
      //About
      allFade();
      document.getElementById("aboutNavItem").style.color = 'rgb(230,230,230)';
  } else if (scrollPos >= top3 && scrollPos < top4) {
      allFade();
      document.getElementById("infoNavItem").style.color = 'rgb(230,230,230)';
  }else if (scrollPos >= top4 && scrollPos < top5) {
    allFade();
      document.getElementById("teamNavItem").style.color = 'rgb(230,230,230)';
  }else if (scrollPos >= top5 && scrollPos < top6) {
    allFade();
      document.getElementById("appNavItem").style.color = 'rgb(230,230,230)';
  }else if (scrollPos >= top6 && scrollPos < top7) {
    allFade();
      document.getElementById("carNavItem").style.color = 'rgb(230,230,230)';
  }else if (scrollPos >= top7 && scrollPos < top8) {
    allFade();
      document.getElementById("sponsorshipNavItem").style.color = 'rgb(230,230,230)';
  }else if (scrollPos >= top8 && scrollPos < top9) {
    allFade();
      document.getElementById("galleryNavItem").style.color = 'rgb(230,230,230)';
  }else if (scrollPos >= top9) {
      allFade();
      document.getElementById("contactNavItem").style.color = 'rgb(230,230,230)';
  }
});

function allFade(){
    Array.prototype.forEach.call(document.getElementsByClassName("navItem"), function(el) {
        // Do stuff here
        el.style.color = 'rgba(230,230,230,0.4)';
    });
}