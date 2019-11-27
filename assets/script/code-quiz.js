// **********************************************
// globals
// **********************************************

var viewBtnElem = $("#view"); 
var startBtnElem = $("#start"); 
var stopBtnElem = $("#stop"); 
var currQElem = $("#currQuestion"); 
var answerULElem = $("#answerList"); 
var timeRemElem = $("#timeRem"); 

var interval;  
var timeRem = 5; 

// **********************************************
// functions
// **********************************************

function decrementTimer () {

    console.log (timeRemElem); 
    timeRem--;
    timeRemElem.html(timeRem); 

    if (timeRem == 0) {
        clearInterval(interval); 
    }
} 


function startTimer () {

    clearInterval(interval); 
    interval = setInterval(function() {
        decrementTimer();
    }, 1000);
}

function init () {

    //console.log (currQuestion);

    // load up the first question. This will all eventually move elsewhere, just want to see one
    currQElem.html(questions[0].title); 

    var li; 
    var liBtn; 
    for (i=0; i<questions[0].choices.length; i++) {

        li = $("<li>"); 
        li.html(questions[0].choices[i]); 

        liBtn = $("<button>"); 
        liBtn.html("OK"); 
        liBtn.attr("value", i); 
        liBtn.attr ("class", "answerBtn"); 
        console.log (liBtn); 

        li.append (liBtn); 
        answerULElem.append (li);  
    }

};
// **********************************************
// listeners
// **********************************************

startBtnElem.on("click", function (){

    startTimer (); 

}); 

stopBtnElem.on("click", function (){

    clearInterval(interval); 

}); 

// **********************************************
// main
// **********************************************

$(document).ready(function() {

    init ();


}); 

