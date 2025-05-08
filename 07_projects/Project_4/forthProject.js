let max = 20;
let min = 1;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNum);

const UserNum = document.querySelector('#guessField');
const Submit = document.querySelector('#subt');
const guessList = document.querySelector('.guesses');
const remainTry = document.querySelector('.lastResult');
const comment = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

//here i check is the player  available or not
if(playGame){
    Submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(UserNum.value);
        // console.log(guess);
        validateGuess(guess)// control flow goes to this method
    })
}
//here i look for the input is actualy a positive number or not and passes the control flow to next
function validateGuess(guess){
    if(isNaN(guess)){
        alert('pls enter a valid number');
    }else if(guess < 1 || guess > 20){
        alert('pls enter the number between 1-20');
    }else{
        prevGuess.push(guess);
        if(numGuess === 5){
            displayGuess(guess);
            displayMessage(`game over. The number is ${randomNum}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
       
    }

}
 // here i check the number is higher or lower
function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(' you guessed it right');
        endGame();
    }else if(guess < randomNum){
        displayMessage(' your number is smaller than the actual number')
    }else if(guess > randomNum){
        displayMessage(' your number is larger than the actual number')
    }

}
//it is clean up process for every try
function displayGuess(guess){
    UserNum.value = ''
    guessList.innerHTML += `${guess } ,`
    numGuess++;
    remainTry.innerHTML = `${6 - numGuess}`
}

function displayMessage(message){
    comment.innerHTML = `<h2>${message}</h2>`;
}
//make everything unchangable
function endGame(game){
    UserNum.value = '';
    UserNum.setAttribute('disabled', '');
    p.classList.add('botton');
    p.innerHTML = '<h2 id="newGame"> Start a New Game</h2>';
    startOver.appendChild(p)
    playGame = false;
    newGame();
}
//prepare to start a new game
function newGame(game){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function(e){
        randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        prevGuess = [];
        numGuess = 1;
        guessList.innerHTML = '';
        remainTry.innerHTML = `${6 - numGuess}`;
        UserNum.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;

    })
}


