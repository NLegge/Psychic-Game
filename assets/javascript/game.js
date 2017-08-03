var alphabet = ["a", "b", "c", "d", "e", "f", "g",
				"h", "i", "j", "k", "l", "m", "n",
				"o", "p", "q", "r", "s", "t", "u",
				"v", "w", "x", "y", "z"];
var wins = 0
var losses = 0
var guesses = 9
var computerChoice;
var userGuess;
var letters = [];
var i = Math.floor(Math.random() * alphabet.length);

computerChoice = alphabet[i];

document.onkeyup = function(event) {
userGuess = String.fromCharCode(event.keyCode).toLowerCase();
letters.push(userGuess);
document.getElementById('guess').innerHTML = letters;
guesses--;
document.getElementById('remaining').innerHTML = guesses;
	if (userGuess === computerChoice) {
		wins++;
		document.getElementById('winner').innerHTML = wins;
	}
	else if (guesses === 0) {
		losses++;
		document.getElementById('loser').innerHTML = losses;
		guesses = 9
		document.getElementById('remaining').innerHTML = guesses;
		letters = [];
		document.getElementById('guess').innerHTML = letters;
		computerChoice = alphabet[i];
	}

}

