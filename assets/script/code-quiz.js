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
var timeRem = 65; 

var questionCt = 0; 
var wrongCt = 0; 
var rightCt = 0; 
var currQ = -1; 
var quizInProg = false; 

var initialsIP = ""; 

// **********************************************
// functions
// **********************************************

function endQuiz(){

    if (quizInProg === false) {
        return; 
    }
    quizInProg = false; 
    timeRemElem.html(0); 
    answerULElem.empty(); 

    var highScore = localStorage.getItem(initialsIP); 
    console.log ("right " + rightCt + " wrong " + wrongCt + " high score " + highScore + " " + initialsIP); 

    if ((highScore == null || highScore == "" || rightCt > highScore)
    && rightCt > 0 
    && initialsIP != null 
    && initialsIP != "") {
        localStorage.setItem(initialsIP, rightCt); 
        alert ("New high score for " + initialsIP + "! Congratulations!"); 
    }
    else{
        alert ("High score not met, " + initialsIP + ". Better luck next time!"); 
    }
} // endQuiz

// **********************************************
// **********************************************

function loadNextQuestion (){

    currQ++; 
    if (currQ >= questions.length) {
        endQuiz(); 
        return; 
    }
    answerULElem.empty();

    currQElem.html(questions[currQ].title); 

    var li; 
    var liBtn; 
    for (i=0; i<questions[currQ].choices.length; i++) {

        //console.log (questions[currQ].choices[i]); 
        li = $("<li>"); 
        li.html(questions[currQ].choices[i]); 

        liBtn = $("<button>"); 
        liBtn.html("OK"); 
        liBtn.attr("value", i); 
        liBtn.attr ("class", "answerBtn"); 

        li.append (liBtn); 
        answerULElem.append (li);  
    }
} // loadNextQuestion

function decrementTimer () {

    timeRem--;
    timeRemElem.html(timeRem); 

    if (timeRem <= 0) {
        clearInterval(interval); 
        endQuiz();  
    }
} // decrementTimer

// **********************************************
// **********************************************

function startTimer () {

    clearInterval(interval); 
    loadNextQuestion(); 
    interval = setInterval(function() {
        decrementTimer();
    }, 1000);
} // startTimer

// **********************************************
// **********************************************

function init () {

    // load up the first question. This will all eventually move elsewhere, just want to see one
    questionCt = questions.length; 

}; // init 

// **********************************************
// listeners
// **********************************************

// **********************************************
// start quiz 
// **********************************************
startBtnElem.on("click", function (){

    // re-initialize everything here in case we run the quiz > once 
    timeRem = 65; 
    wrongCt = 0; 
    rightCt = 0; 
    currQ = -1; 
    quizInProg = true; 

    initialsIP = prompt ("Quiz starting!  Please enter your initials"); 
    startTimer (); 
}); //startBtnElem.on("click"

// **********************************************
// stop the timer (this was for debugging)
// **********************************************
stopBtnElem.on("click", function (){
    clearInterval(interval); 
}); //stopBtnElem.on("click"

// **********************************************
// answer buttons 
// **********************************************
answerULElem.on("click", function (){

    answerBtn = event.target; 
    if (answerBtn.matches("button")) {

        if (answerBtn.getAttribute("value") == questions[currQ].answer) {
            rightCt++;
            document.getElementById("right").play();   

        }
        else {
            wrongCt++; 
            timeRem-=5; 
            timeRemElem.html(timeRem); 
            document.getElementById("wrong").play();   
        }
        loadNextQuestion(); 
    }
}); //answerULElem.on("click"

// **********************************************
// view high scores button 
// **********************************************
viewBtnElem.on("click", function () {

    initialsIP = prompt ("Please enter your initials"); 
    var userHighScore = localStorage.getItem(initialsIP); 
    if (userHighScore == null || userHighScore == '') {
        alert ("There is not yet a recorded high score for you");
        return; 
    }
    alert ("Your high score is " + userHighScore); 

}); //viewBtnElem.on("click"

// **********************************************
// main
// **********************************************

$(document).ready(function() {
    init ();
}); 

