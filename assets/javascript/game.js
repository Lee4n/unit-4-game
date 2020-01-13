$(document).ready(function() {

// choose a random number between 19 and 120 at start of game
var ranNum = Math.floor(Math.random() * (120 - 19) + 19);
//add random number within HTML
$("#ranNum").text(ranNum);
//give each gem img a random number
var gem1 = Math.floor(Math.random() * 12 + 1);
var gem2 = Math.floor(Math.random() * 12 + 1);
var gem3 = Math.floor(Math.random() * 12 + 1);
var gem4 = Math.floor(Math.random() * 12 + 1);
//click on each gem to reveal a value
$("#gem1").on("click", function() {
    console.log(gem1);
});
$("#gem2").on("click", function() {
    console.log(gem2);
});
$("#gem3").on("click", function() {
    console.log(gem3);
});
$("#gem4").on("click", function() {
    console.log(gem4);
});






































});