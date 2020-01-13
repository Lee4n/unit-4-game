$(document).ready(function() {

// declare result variables
var totalScore = 0;
var wins = 0;
var losses = 0;

// show scores
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

// choose a random number between 19 and 120 at start of game
var ranNum = Math.floor(Math.random() * (120 - 19) + 19);

// add random number within HTML
$("#ranNum").text(ranNum);

// give each gem img a random number
var gem1 = Math.floor(Math.random() * 12 + 1);
var gem2 = Math.floor(Math.random() * 12 + 1);
var gem3 = Math.floor(Math.random() * 12 + 1);
var gem4 = Math.floor(Math.random() * 12 + 1);

// set win or lose conditions
function playGame() {
    if (totalScore === ranNum) {
        wins++;
        setLabels();
    }
    else if (totalScore > ranNum) {
        losses++;
        setLabels();
    }
}

// click on each gem to reveal a value and push value to total score
// each click function also has scoring conditions
$("#gem1").on("click", function() {
    totalScore = totalScore + gem1;
    $("#totalScore").text(totalScore);
    playGame();
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
});

$("#gem2").on("click", function() {
    totalScore = totalScore + gem2;
    $("#totalScore").text(totalScore);
    playGame();
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
});

$("#gem3").on("click", function() {
    totalScore = totalScore + gem3;
    $("#totalScore").text(totalScore);
    playGame();
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
});

$("#gem4").on("click", function() {
    totalScore = totalScore + gem4;
    $("#totalScore").text(totalScore);
    playGame();
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
});

// reset the game
function setLabels() {
    ranNum = Math.floor(Math.random() * (120 - 19) + 19);
    $("#ranNum").text(ranNum);
    totalScore = 0;
    $("#totalScore").text(totalScore);
    gem1 = Math.floor(Math.random() * 12 + 1);
    gem2 = Math.floor(Math.random() * 12 + 1);
    gem3 = Math.floor(Math.random() * 12 + 1);
    gem4 = Math.floor(Math.random() * 12 + 1);
}

});