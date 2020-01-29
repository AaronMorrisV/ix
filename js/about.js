var typedText1 = new Typed('#typed-text1', {
    stringsElement: '#typed-strings1',
    typeSpeed: 50, //50
    backSpeed: 15, //15
    smartBackspace: true,
    onComplete: function(self) { initOthers(typedText2) },
    preStringTyped: function(pos, self){document.getElementById("aboutPrompt").style.opacity = 0},
});

var typedText2 = new Typed('#typed-text2', {
    stringsElement: '#typed-strings2',
    typeSpeed: 50, //50
    backSpeed: 15, //15
    backDelay: 3000,
    smartBackspace: true,
    onStringTyped: function(pos, self) { text2Images() },
});

/*var typedText3 = new Typed('#typed-text3', {
    stringsElement: '#typed-strings3',
    typeSpeed: 30, //30
    backSpeed: 15, //15
    backDelay: 500,
    smartBackspace: true,
});*/

$('#typed-text1').click(function() { //When "Hello" clicked
    //toggleTyped(titleText);
    init(typedText1);
});


clearInterval(typedText1.timeout); //To stop text from typing instantly
clearInterval(typedText2.timeout);
//clearInterval(typedText3.timeout);
var hasBeenInitialised = false; //So "Hello" can only be clicked once

function init(toInit) {
    if(hasBeenInitialised === false){
        hasBeenInitialised = true;
        // begin the loop w/ first current string (global self.string)
        // current string will be passed as an argument each time after this
        var self = toInit;
        self.timeout = setTimeout(function() {
            // Start typing
            if (self.backspacing) {
                self.backspace(self.strings[self.arrayPos], self.strPos);
            } else {
                self.typewrite(self.strings[self.arrayPos], self.strPos);
            }
        }, self.startDelay);
    }
}

function initOthers(toInit){
    hasBeenInitialised = true;
    // begin the loop w/ first current string (global self.string)
    // current string will be passed as an argument each time after this
    var self = toInit;
    self.timeout = setTimeout(function() {
        // Start typing
        if (self.backspacing) {
            self.backspace(self.strings[self.arrayPos], self.strPos);
        } else {
            self.typewrite(self.strings[self.arrayPos], self.strPos);
        }
    }, self.startDelay);
}

var photoCounter = 0;
function text2Images(){
    photoCounter += 1;
    if(photoCounter === 1){
        document.getElementById("f1InSchoolsAboutPhoto").style.opacity = 1;
        setTimeout(function(){
            document.getElementById("f1InSchoolsAboutPhoto").style.opacity = 0;
        }, 2000); //Wait two seconds
    }

    else if (photoCounter === 2){
        var pDiv = document.getElementById('teamAboutPhotoWrapper');
        var cDiv = pDiv.children;
        for (var i = 0; i < cDiv.length; i++) {
            cDiv[i].style.opacity = 1;
        }

        setTimeout(function(){
            for (var i = 0; i < cDiv.length; i++) {
                cDiv[i].style.opacity = 0;
            }
        }, 1500); //Wait two seconds
    }
    else if (photoCounter === 3){
        var pDiv = document.getElementById('appAboutPhotoWrapper');
        var cDiv = pDiv.children;
        for (var i = 0; i < cDiv.length; i++) {
            cDiv[i].style.opacity = 1;
        }

        setTimeout(function(){
            for (var i = 0; i < cDiv.length; i++) {
                cDiv[i].style.opacity = 0;
            }
        }, 2500); //Wait two seconds

        /*setTimeout(function(){
            initOthers(typedText3);
        }, 350);*/
    }
}
/*function stopType(toStop){
    clearInterval(toStop.timeout);
} */

/*var xBool = true;


function toggleTyped(toToggle) {
    var self = toToggle;
    if (xBool === true) {
        stopType(toToggle);
        xBool = false;
    } else {     
        init(toToggle);
        xBool = true;
    }
    return;
}; */

//https://codepen.io/ralcus/pen/pvjObB