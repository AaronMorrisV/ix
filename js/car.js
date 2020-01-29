var bodySection = document.getElementById("bodySection");
var frontSection = document.getElementById("frontSection");

var homeButton = document.getElementById("carSelectionHome");
var bodyButton = document.getElementById("carSelectionBody");
var frontButton = document.getElementById("carSelectionFront");
var rearButton = document.getElementById("carSelectionRear");

var selector = document.getElementById("carSectionSelector");

function slide()
{             
    bodySection.style.right = "0%"; 

    bodyButton.style.backgroundColor = 'rgba(0,0,0,0.2)';
    homeButton.style.background = frontButton.style.background = rearButton.style.background = "none";

    selector.style.opacity = "1";
} 


function carSectionHome(){
    bodySection.style.right = "-100%"; 
    frontSection.style.right = "-100%";
    rearSection.style.right = "-100%";

    homeButton.style.backgroundColor = 'rgba(0,0,0,0.2)';
    bodyButton.style.background = frontButton.style.background = rearButton.style.background = "none";

    selector.style.opacity = "0";
}

function carSectionBody(){
    bodySection.style.right = "0%"; 
    frontSection.style.right = "-100%";
    rearSection.style.right = "-100%";

    bodyButton.style.backgroundColor = 'rgba(0,0,0,0.2)';
    homeButton.style.background = frontButton.style.background = rearButton.style.background = "none";
}



function carSectionFront(){
    frontSection.style.right = "0%";
    rearSection.style.right = "-100%";


    frontButton.style.backgroundColor = 'rgba(0,0,0,0.2)';
    homeButton.style.background = bodyButton.style.background = rearButton.style.background = "none";
}

 function carSectionRear(){
    rearSection.style.right = "0%";

    rearButton.style.backgroundColor = 'rgba(0,0,0,0.2)';
    homeButton.style.background = bodyButton.style.background = frontButton.style.background = "none";
}