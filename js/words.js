var newWordInterval;
var words;
var wordsIndex;
var seconds;

var curtainSpeed = 1500;

$(document).ready(function(){
    seconds = JSON.parse(sessionStorage.getItem("seconds"));
    words = JSON.parse(sessionStorage.getItem("words"));
    wordsIndex = 0;
    $("#pause").click(PauseOrStart);
    $("#back").click(Back)
    Start();
});

function Back() {
    window.location.href = "/";
}

function Start() {
    // * 1000 --> setInterval uses ms, not s
    // + curtainspeed*2 to make sure the curtain open/close doesn't use any time, 250 extra for margin
    newWordInterval = setInterval(NewWord, (seconds * 1000) + (curtainSpeed * 2) + 250);
    $("#pause").text("Pauze");
}

function Pause() {
    clearInterval(newWordInterval);
    newWordInterval = null;
    $("#pause").text("Start");
}

function PauseOrStart() {
    // If there is an interval, the application is started
    if (newWordInterval != null) Pause();
    // If the interval is null, the application is paused
    else Start();
}

function NewWord() {
    $("#curtain").animate({
        width: "100%"
    }, curtainSpeed);
    
    if (wordsIndex >= words.length) {
        Pause();
        $("#word").text("Klaar!");
        return;
    }

    setTimeout(function(){
        $("#word").text(words[wordsIndex]);
        wordsIndex++;
    
        $("#curtain").animate({
            width: "0%"
        }, curtainSpeed);
    }, curtainSpeed);
}
