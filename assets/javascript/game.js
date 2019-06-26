let wins = 0;
let losses = 0;
let numGuesses = 0;
// let guessChoices = []


//options the computer can choose from
let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"];

//this logs what the user keys in
document.onkeyup = function() {
    let userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userGuess);


//this lets the computer guess a random letter
let computerGuess = options[Math.floor(Math.random() * options.length)];
    console.log(computerGuess);


if ((userGuess==computerGuess)) {
    wins++;
    alert("win!");
} else {
    losses++
    alert("loss");
}

let html = "<p>Guess what letter I am thinking of!</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" 
// "<p>Guesses Left: " + numGuesses + "</p>" +
// "<p>Your guesses so far: " + guessChoices "</p>"


document.querySelector("#game").innerHTML = html;
}





