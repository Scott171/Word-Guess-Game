



var candy= ['skittles','smarties','snickers','butterfinger','runts','starburst','twix','whoppers'];




var userChoiceText = document.getElementById("userchoice-text");
document.onkeyup = function(event) {
    var userGuess = event.key;
    userChoiceText.textContent = "You chose: " + userGuess;
};



