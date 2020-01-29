//Hover Fade Script
//Text and images
$('.appSection').hover(function(){
    $('.appSection').not(this).each(function(){
        $(this).addClass("appSectionFade");
    });

;
}, function(){
    $('.appSection').not(this).each(function(){
        $(this).removeClass("appSectionFade");
    });
});



//Videos

//1
$('#appSection1').hover(function(){
    $('#appVideo1').addClass("selectedVideo");
    $('#appVideo1').get(0).play();
    $('.appVideo').not('#appVideo1').each(function(){
        $(this).addClass("hiddenVideo");
        $(this).removeClass("selectedVideo");
    });
;
}, function(){
    $('#appVideo1').get(0).pause();
    $('.appVideo').not('#appVideo1').each(function(){
        $(this).removeClass("hiddenVideo");
        $(this).addClass("selectedVideo");
    });
});



//2
$('#appSection2').hover(function(){
    $('#appVideo2').addClass("selectedVideo");
    $('#appVideo2').get(0).play();
    $('.appVideo').not('#appVideo2').each(function(){
        $(this).addClass("hiddenVideo");
        $(this).removeClass("selectedVideo");
    });

;
}, function(){
    $('#appVideo1').get(0).pause();
    $('.appVideo').not('#appVideo2').each(function(){
        $(this).removeClass("hiddenVideo");
        $(this).addClass("selectedVideo");
    });
});



//3
$('#appSection3').hover(function(){
    $('#appVideo3').addClass("selectedVideo");
    $('#appVideo3').get(0).play();
    $('.appVideo').not('#appVideo3').each(function(){
        $(this).addClass("hiddenVideo");
        $(this).removeClass("selectedVideo");
    });

;
}, function(){
    $('#appVideo3').get(0).pause();
    $('.appVideo').not('#appVideo3').each(function(){
        $(this).removeClass("hiddenVideo");
        $(this).addClass("selectedVideo");
    });
});


//4
$('#appSection4').hover(function(){
    $('#appVideo4').addClass("selectedVideo");
    $('#appVideo4').get(0).play();
    $('.appVideo').not('#appVideo4').each(function(){
        $(this).addClass("hiddenVideo");
        $(this).removeClass("selectedVideo");
    });

;
}, function(){
    $('#appVideo4').get(0).pause();
    $('.appVideo').not('#appVideo4').each(function(){
        $(this).removeClass("hiddenVideo");
        $(this).addClass("selectedVideo");
    });
});


//5
$('#appSection5').hover(function(){
    $('#appVideo5').addClass("selectedVideo");
    $('#appVideo5').get(0).play();
    $('.appVideo').not('#appVideo5').each(function(){
        $(this).addClass("hiddenVideo");
        $(this).removeClass("selectedVideo");
    });

;
}, function(){
    $('#appVideo5').get(0).pause();
    $('.appVideo').not('#appVideo5').each(function(){
        $(this).removeClass("hiddenVideo");
        $(this).addClass("selectedVideo");
    });
});


//6
$('#appSection6').hover(function(){
    $('#appVideo6').addClass("selectedVideo");
    $('#appVideo6').get(0).play();
    $('.appVideo').not('#appVideo6').each(function(){
        $(this).addClass("hiddenVideo");
        $(this).removeClass("selectedVideo");
    });

;
}, function(){
    $('#appVideo6').get(0).pause();
    $('.appVideo').not('#appVideo6').each(function(){
        $(this).removeClass("hiddenVideo");
        $(this).addClass("selectedVideo");
    });
});