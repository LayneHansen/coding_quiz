


    // var questions =

    // var score = 0;

 


    // TIMER

    var secondsDisplay = document.querySelector("#seconds");

    var secondsRemain = 60;

    var start = document.querySelector("#start-button");
    var questionOne = document.getElementById("q1");
    var questionTwo = document.getElementById("q2");
    // var questionThree = document.getElementById("q3");
    // var questionFour = document.getElementById("q4");
    // var questionFive = document.getElementById("q5");
    // var questionSix = document.getElementById("q6");
    // var questionSeven = document.getElementById("q7");
    // var questionEight = document.getElementById("q8");
    // var questionNine = document.getElementById("q9");
    // var questionTen = document.getElementById("q10");
    

    /* START BUTTON FUNCTION
        1. Push Button
        2. Button Disappears
        3. Timer Starts
        4. First question appears
    */

    start.addEventListener("click", function () {
        var secondsInterval = setInterval(function () {
            secondsRemain--;
            secondsDisplay.innerText = secondsRemain;
            
            if (secondsRemain === 0) {
                clearInterval(secondsInterval);
            }

            
        }, 1000);
        
        removeElement (start);
        
        showElement (questionOne);

    });

    // Event of answering question 1

    // Question 1

        var quest1 = document.querySelector('.q1-correct');
        quest1.addEventListener('click', function() {
            removeElement(questionOne);
            showElement(questionTwo);
        })

    // Question 2

        var quest2 = document.querySelector('.q2-correct');
        quest2.addEventListener('click', function() {
            removeElement(questionTwo);
            showElement(questionThree);
        })

    // Question 3

    // Question 4
    
    // Question 5

    // Question 6

    // Question 7

    // Question 8

    // Question 9
    
    // Question 10

    
    
    


    function removeElement (elementToRemove) {
        elementToRemove.style.display = 'none';

    }

    function showElement (elementToShow) {
        elementToShow.style.display = 'block';
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

/* save high scores

create function

function saveScore() {
    scoreVariable
    localStorage.setItem("scoreVariable", "High Score");
}

// call function


*/