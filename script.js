

// TIMER

var secondsDisplay = document.querySelector("#seconds");
var secondsRemain = 60;

// SCORECARD

var scoreCard = document.querySelector("#current-score");
console.log(scoreCard);

var scoreCurrent = 0;

var highScore = document.querySelector(".high-score-card");



// MIDDLE DISPLAY CARDS

var start = document.querySelector("#start-button");
var questionOne = document.getElementById("q1");
var questionTwo = document.getElementById("q2");
var questionThree = document.getElementById("q3");
var questionFour = document.getElementById("q4");
var questionFive = document.getElementById("q5");
var questionSix = document.getElementById("q6");
var questionSeven = document.getElementById("q7");
var questionEight = document.getElementById("q8");
var questionNine = document.getElementById("q9");
var questionTen = document.getElementById("q10");
var gameOverCard = document.querySelector("#game-over");

// var wrongAnswer = document.querySelector(".wrong");

// wrongAnswer.addEventListener("click", function () {



// })


/* START BUTTON FUNCTION
    1. Push Button
    2. Button Disappears
    3. Timer Starts
    4. First question appears
*/

var secondsInterval; 

start.addEventListener("click", function () {
        secondsInterval = setInterval(function () {
        secondsRemain--;
        secondsDisplay.innerText = secondsRemain;

        if (secondsRemain === 0) {
            endGame();
        }


    }, 1000);

    removeElement(start);
    showElement(questionOne);
    // endGame ();  // test code remove this***
});

// Event of answering questions

// Question 1

var quest1 = document.querySelector('.q1-correct');
quest1.addEventListener('click', function () {
    scoreCurrent = scoreCurrent + 2;
    scoreCard.innerText = scoreCurrent;
    removeElement(questionOne);
    showElement(questionTwo);

})

var wrongAnswers = document.querySelectorAll('.wrong-q1');

for (var i = 0; i < wrongAnswers.length; i++) {
    var currentEl = wrongAnswers[i];

    currentEl.addEventListener("click", function () {
        scoreCurrent = scoreCurrent - 1;
        scoreCard.innerText = scoreCurrent;
        decreaseTime();
        removeElement(questionOne);
        showElement(questionTwo);
    })
}

// Question 2

var quest2 = document.querySelector('.q2-correct');
quest2.addEventListener('click', function () {
    scoreCurrent = scoreCurrent + 2;
    scoreCard.innerText = scoreCurrent;
    removeElement(questionTwo);
    showElement(questionThree);

})

var wrongAnswers = document.querySelectorAll('.wrong-q2');

for (var i = 0; i < wrongAnswers.length; i++) {
    var currentEl = wrongAnswers[i];

    currentEl.addEventListener("click", function () {
        scoreCurrent = scoreCurrent - 1;
        scoreCard.innerText = scoreCurrent;
        decreaseTime();
        removeElement(questionTwo);
        showElement(questionThree);
    })
}

// Question 3

var quest3 = document.querySelector('.q3-correct');
quest3.addEventListener('click', function () {
    scoreCurrent = scoreCurrent + 2;
    scoreCard.innerText = scoreCurrent;
    removeElement(questionThree);
    showElement(questionFour);

})

var wrongAnswers = document.querySelectorAll('.wrong-q3');

for (var i = 0; i < wrongAnswers.length; i++) {
    var currentEl = wrongAnswers[i];

    currentEl.addEventListener("click", function () {
        scoreCurrent = scoreCurrent - 1;
        scoreCard.innerText = scoreCurrent;
        decreaseTime();
        removeElement(questionThree);
        showElement(questionFour);
    })
}

// Question 4

var quest4 = document.querySelector('.q4-correct');
quest4.addEventListener('click', function () {
    scoreCurrent = scoreCurrent + 2;
    scoreCard.innerText = scoreCurrent;
    removeElement(questionFour);
    showElement(questionFive);

})

var wrongAnswers = document.querySelectorAll('.wrong-q4');

for (var i = 0; i < wrongAnswers.length; i++) {
    var currentEl = wrongAnswers[i];

    currentEl.addEventListener("click", function () {
        scoreCurrent = scoreCurrent - 1;
        scoreCard.innerText = scoreCurrent;
        decreaseTime();
        removeElement(questionFour);
        showElement(questionFive);
    })
}

// Question 5

var quest5 = document.querySelector('.q5-correct');
quest5.addEventListener('click', function () {
    scoreCurrent = scoreCurrent + 2;
    scoreCard.innerText = scoreCurrent;
    removeElement(questionFive);
    showElement(questionSix);

})

var wrongAnswers = document.querySelectorAll('.wrong-q5');

for (var i = 0; i < wrongAnswers.length; i++) {
    var currentEl = wrongAnswers[i];

    currentEl.addEventListener("click", function () {
        scoreCurrent = scoreCurrent - 1;
        scoreCard.innerText = scoreCurrent;
        decreaseTime();
        removeElement(questionFive);
        showElement(questionSix);
    })
}

// Question 6

var quest6 = document.querySelector('.q6-correct');
quest6.addEventListener('click', function () {
    scoreCurrent = scoreCurrent + 2;
    scoreCard.innerText = scoreCurrent;
    removeElement(questionSix);
    showElement(questionSeven);

})

var wrongAnswers = document.querySelectorAll('.wrong-q6');

for (var i = 0; i < wrongAnswers.length; i++) {
    var currentEl = wrongAnswers[i];

    currentEl.addEventListener("click", function () {
        scoreCurrent = scoreCurrent - 1;
        scoreCard.innerText = scoreCurrent;
        decreaseTime();
        removeElement(questionSix);
        showElement(questionSeven);
    })
}

// Question 7

var quest7 = document.querySelector('.q7-correct');
quest7.addEventListener('click', function () {
    scoreCurrent = scoreCurrent + 2;
    scoreCard.innerText = scoreCurrent;
    removeElement(questionSeven);
    showElement(questionEight);

})
var wrongAnswers = document.querySelectorAll('.wrong-q7');

for (var i = 0; i < wrongAnswers.length; i++) {
    var currentEl = wrongAnswers[i];

    currentEl.addEventListener("click", function () {
        scoreCurrent = scoreCurrent - 1;
        scoreCard.innerText = scoreCurrent;
        decreaseTime();
        removeElement(questionSeven);
        showElement(questionEight);
    })
}

// Question 8

var quest8 = document.querySelector('.q8-correct');
quest8.addEventListener('click', function () {
    scoreCurrent = scoreCurrent + 2;
    scoreCard.innerText = scoreCurrent;
    removeElement(questionEight);
    showElement(questionNine);

})
var wrongAnswers = document.querySelectorAll('.wrong-q8');

for (var i = 0; i < wrongAnswers.length; i++) {
    var currentEl = wrongAnswers[i];

    currentEl.addEventListener("click", function () {
        scoreCurrent = scoreCurrent - 1;
        scoreCard.innerText = scoreCurrent;
        decreaseTime();
        removeElement(questionEight);
        showElement(questionNine);
    })
}

// Question 9

var quest9 = document.querySelector('.q9-correct');
quest9.addEventListener('click', function () {
    scoreCurrent = scoreCurrent + 2;
    scoreCard.innerText = scoreCurrent;
    removeElement(questionNine);
    showElement(questionTen);

})

var wrongAnswers = document.querySelectorAll('.wrong-q9');

for (var i = 0; i < wrongAnswers.length; i++) {
    var currentEl = wrongAnswers[i];

    currentEl.addEventListener("click", function () {
        scoreCurrent = scoreCurrent - 1;
        scoreCard.innerText = scoreCurrent;
        decreaseTime();
        removeElement(questionNine);
        showElement(questionTen);
    })
}


// Question 10

var quest10 = document.querySelector('.q10-correct');
quest10.addEventListener('click', function () {
    scoreCurrent = scoreCurrent + 2;
    scoreCard.innerText = scoreCurrent;
    removeElement(questionTen);
    showElement(gameOverCard);
    endGame();

})

var wrongAnswers = document.querySelectorAll('.wrong-q10');

for (var i = 0; i < wrongAnswers.length; i++) {
    var currentEl = wrongAnswers[i];

    currentEl.addEventListener("click", function () {
        scoreCurrent = scoreCurrent - 1;
        scoreCard.innerText = scoreCurrent;
        decreaseTime();
        removeElement(questionTen);
        showElement(gameOverCard);
        endGame();
    })
}

// Game Over Card

var gameOver = document.querySelector('#game-over');
    gameOver.addEventListener('click', function () {
    // reset clock and score

})




function removeElement(elementToRemove) {
    elementToRemove.style.display = 'none';
}

function showElement(elementToShow) {
    elementToShow.style.display = 'block';
}

function decreaseTime() {
    secondsRemain = secondsRemain -5;
}


function endGame() {
    clearInterval(secondsInterval);

    if (secondsRemain === 0) {
        removeElement();
        showElement(gameOverCard);
    }

    // local storage
    
    let highScore = localStorage.getItem('highscore');
    console.log(highScore);

    if (scoreCurrent > highScore) {
        localStorage.setItem("highscore", scoreCurrent);

    } // else if (!highScore) localStorage.setItem("highscore", scoreCurrent);
    
    var localHighScore = localStorage.getItem('highscore')
    console.log("Is there anybody out there?", localHighScore);
    highScore.innerText = localHighScore;

    // print high score
    // user enter initials

}




    // time decreases with wrong answer

    // reaches zero, game over

    // all questions answered, game over

// Answer question with click

    // function selectAnswer {

    // }

    // // switches to new question

    // function nextQuestion() {

    // }

// Game Over! icon

// Save score and initials

// save high scores

// create function

// function saveScore() {
//     scoreVariable
//     localStorage.setItem("scoreVariable", "High Score");
// }

// call function
