$(document).ready(function(){
    $("#start").click(Start);
});


function Start() {
    var seconds = parseInt($("#seconds").val());
    var unparsedWords = $("#words").val().split("\n");
    var words = [];
    for (var i = 0; i < unparsedWords.length; i++) {
        var word = unparsedWords[i];
        if (word != "") words.push(word);
    } 
    sessionStorage.setItem("seconds", JSON.stringify(seconds));
    sessionStorage.setItem("words", JSON.stringify(words));
    window.location.href = "words.html";
}