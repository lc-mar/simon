//3. At the top of the game.js file, create a new array called buttonColors and set it to hold the sequence "red", "blue", "green", "yellow" .
var buttonColors = ["red", "blue", "green", "yellow"];

//5. At the top of the game.js file, create a new empty array called gamePattern.
var gamePattern = [];

//1. Inside game.js create a new function called nextSequence()
function nextSequence() {
    //2. Inside the new function generate a new random number between 0 and 3, and store it in a variable called randomNumber
    var randomNumber = Math.floor(Math.random() * 4);
    //4. Create a new variable called randomChosenColor and use the randomNumber from step 2 to select a random color from the buttonColors array.
  var randomChosenColor = buttonColors[randomNumber];
};
