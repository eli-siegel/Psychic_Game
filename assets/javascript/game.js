var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guesses = [];
var left = 9;
var psychicGuess = [];

//function that selects a random object from array "alphabet" and assigns it to psychicGuess

var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    psychicGuess.push(randomLetter);
    console.log(psychicGuess);


//function that takes user input and checks if it is equal to psychicGuess
document.onkeyup = function(event) {
    var playerGuess = event.key;
    guesses.push(playerGuess);


    if ((playerGuess === psychicGuess[0]) && (left > 0)) {
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        left = 9;
        guesses.length = 0;
        var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        psychicGuess.push(randomLetter);
    }

    else if (!/^[a-z0-9_-]*$/i.test(playerGuess)) {
        alert("pick a letter, fool");
    }

    else if ((playerGuess != psychicGuess) && (left > 0)) {
        left--;
        document.querySelector('#left').innerHTML = "Guesses Left: " + left;
        $('#guesses').append(playerGuess + ", ");
    }

    else {
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        left = 9;
        guesses.length = 0;
        var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        psychicGuess.push(randomLetter);
    }

    console.log(playerGuess);
    console.log(left);
    console.log(guesses);
}



//function that records user guesses and logs it under var guesses

//function that reduces value of var left after each guess

//function that resets guesses and left after win or loss is recorded and selects new value for psychicGuess