const form = document.querySelector('form');
let count = 0;
let previousGuess = [];
const randomNum = Math.floor(Math.random() * 100) + 1;

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const num = parseInt(document.querySelector('#numin').value);
    const scoreDiv = document.querySelector('#score');
    const previousDiv = document.querySelector('#previous');
    const remainingDiv = document.querySelector('#remaining');
    
    if (num <= 0 || num > 100 || isNaN(num)) {
        scoreDiv.innerHTML = "Enter valid number (1-100)";
    } else if (num == randomNum) {
        scoreDiv.innerHTML = `Correct Guess! Score you got is: ${(10 - count) * 10}`;
        previousGuess.push(num);
        previousDiv.innerHTML = `Previous guesses: ${previousGuess.join(" ")}`;
        remainingDiv.innerHTML = `Remaining guesses: ${10 - count - 1}`;
        disableGame();
    } else {
        scoreDiv.innerHTML = "Wrong Guess";
        previousGuess.push(num);
        count++;
        previousDiv.innerHTML = `Previous guesses: ${previousGuess.join(" ")}`;
        remainingDiv.innerHTML = `Remaining guesses: ${10 - count}`;
        
        if (count == 10) {
            scoreDiv.innerHTML = `Game over! The number was ${randomNum}`;
            disableGame();
        }
    }
    
    document.querySelector('#numin').value = '';
});

function disableGame() {
    document.querySelector('#submit').disabled = true;
    document.querySelector('#numin').disabled = true;
}

function resetGame() {
    count = 0;
    previousGuess = [];
    randomNum = Math.floor(Math.random() * 100) + 1;
    document.querySelector('#submit').disabled = false;
    document.querySelector('#numin').disabled = false;
    document.querySelector('#score').innerHTML = '';
    document.querySelector('#previous').innerHTML = 'Previous guesses:';
    document.querySelector('#remaining').innerHTML = 'Guesses remaining: 10';
}