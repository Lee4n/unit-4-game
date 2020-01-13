$(document).ready(function() {

// declare result variables
var totalScore = 0;
var wins = 0;
var losses = 0;

// choose a random number between 19 and 120 at start of game
var ranNum = Math.floor(Math.random() * (120 - 19) + 19);

// add random number within HTML
$("#ranNum").text(ranNum);

// give each gem img a random number
var gem1 = Math.floor(Math.random() * 12 + 1);
var gem2 = Math.floor(Math.random() * 12 + 1);
var gem3 = Math.floor(Math.random() * 12 + 1);
var gem4 = Math.floor(Math.random() * 12 + 1);

// click on each gem to reveal a value
$("#gem1").on("click", function() {
    totalScore = totalScore + gem1;
    $("#totalScore").text(totalScore);
});
$("#gem2").on("click", function() {
    totalScore = totalScore + gem2;
    $("#totalScore").text(totalScore);
});
$("#gem3").on("click", function() {
    totalScore = totalScore + gem3;
    $("#totalScore").text(totalScore);
});
$("#gem4").on("click", function() {
    totalScore = totalScore + gem4;
    $("#totalScore").text(totalScore);
});






































});