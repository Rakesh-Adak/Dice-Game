
var player1 = prompt("Enter 1st player's name: ");
var player2 = prompt("Enter 2nd player's name: ");

// Image 1
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // Dice 1 to Dice 6 images //
var randomDiceImageSource1 = "images/" + randomDiceImage1; // Random Dice Image generator//

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDiceImageSource1);


// Image 2

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomDiceImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImageSource2);

// Winner Conditionals

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = player1 + " wins!"
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = player2 + " wins!"
}
else {
    document.querySelector("h1").innerHTML = "It's a Draw!"
}

// Player name

var firstPlayer = document.querySelector("p.firstPlayer").innerHTML = player1;

var secondPlayer = document.querySelector("p.secondPlayer").innerHTML = player2;

// Refresh Page

function refreshPage(){
    location.reload();
}
