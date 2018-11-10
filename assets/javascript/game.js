

var candyWords = ['skittles', 'smarties', 'snickers', 'butterfinger', 'runts', 'starburst', 'twix', 'whoppers'];
var lettersInWord = [];
var blanks = [];
var numBlanks = 0;
var randomWord = "";
var wins = 0;
var losses = 0;
var numberOfGuesses = 10;
var correctGuess = 0;
var wrong = [];
var lettersGuessed = "";

var userChoiceText = document.getElementById("userchoice-text");
var randomWordText = document.getElementById("random-word");
document.getElementById("wins").innerHTML = wins;
document.getElementById("lose").innerHTML = losses;

function reset() {
lettersInWord= [];
blanks=[];
wrong=[];
numberOfGuesses=10;
correctGuess=0;
numBlanks=0;
	start()
}



function start() {
	randomWord = candyWords[Math.floor(Math.random() * candyWords.length)];
	lettersInWord = randomWord.split('');
	numBlanks = lettersInWord.length;
	document.getElementById('numberOfGuesses').innerHTML = numberOfGuesses;
	for (var i = 0; i < numBlanks; i++) {
		blanks.push("_");
		document.getElementById('random-word').innerHTML = blanks;
		document.getElementById('wrong-letters-guessed').innerHTML = wrong;


	}
	document.getElementById('random-word').innerHTML = blanks.join(' ');
	console.log(randomWord);
	console.log(numberOfGuesses);
	console.log(lettersInWord);
	console.log(numBlanks);
	console.log(blanks);
}
document.onkeyup = function (event) {
	var userGuess = event.key;
	compare(userGuess);
	userChoiceText.textContent = "" + userGuess;
	$("#instruction").hide();
	winLose()

};

function compare(userGuess) {
	if (randomWord.indexOf(userGuess) > -1) {

		for (var i = -0; i < blanks.length; i++) {

			if (lettersInWord[i] === userGuess) {
				blanks[i] = userGuess;
				document.getElementById('random-word').innerHTML = blanks.join(' ');
				correctGuess++;
			}


		}

	}
	else {
		wrong.push(userGuess);
		numberOfGuesses--;
		console.log(numberOfGuesses);
		document.getElementById('numberOfGuesses').innerHTML = numberOfGuesses;
		document.getElementById('wrong-letters-guessed').innerHTML = wrong;
	}


}
function winLose() {
	if (numBlanks === correctGuess) {
		wins++;
		console.log(wins)
		document.getElementById('wins').innerHTML = wins;
		reset()

	}
	else if (numberOfGuesses === 0) {
		losses++;
		console.log(losses);
		document.getElementById("lose").innerHTML = losses;
reset()
	}
}




start()

