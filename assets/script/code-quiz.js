// **********************************************
// globals
// **********************************************

var viewBtn = $("#view"); 
var startBtn = $("#start"); 
var currQ = $("#currQuestion"); 
var answerUL = $("#answerList"); 
var timeRem = $("#timeRem"); 

// **********************************************
// functions
// **********************************************


function init () {

    //console.log (currQuestion);

    // load up the first question. This will all eventually move elsewhere, just want to see one
    currQ.html(questions[0].title); 

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
        answerUL.append (li);  
    }

};
// **********************************************
// listeners
// **********************************************

// **********************************************
// main
// **********************************************

$(document).ready(function() {

    init ();


}); 

