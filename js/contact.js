var counter = 0;
$('#contactUsText').click(function(){
    counter += 1;

    if(counter%2 === 0){ //close
        $('#contact').css("height", "60px");
        $('#contactOverlayColour').css("margin-top", "60px");
        $('#contactUsText').css("color", "rgb(230,230,230)");
        $('html, body').animate({scrollTop: '-=290px'}, 500);
    }
    else{ //open.. odd numbers
        $('#contact').css("height", "350px");
        $('#contactOverlayColour').css("margin-top", "0px");
        $('#contactUsText').css("color", "#1e1e1e");
        $('html, body').animate({scrollTop: '+=350px'}, 500);
    }

});

$('#contactNavItem, .contactButton').click(function(){
    if(counter%2 === 0){
        counter += 1;
    }
    $('#contact').css("height", "350px");
    $('#contactOverlayColour').css("margin-top", "0px");
    $('#contactUsText').css("color", "#1e1e1e");        
});