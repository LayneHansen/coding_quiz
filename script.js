


    // var questions =

    // var score = 0;

 


    // TIMER

    var secondsDisplay = document.querySelector("#seconds");

    var secondsRemain = 60;

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

    // Event of answering questions

    // Question 1

        var quest1 = document.querySelector('.q1-correct');
        quest1.addEventListener('click', function() {
            removeElement(questionOne);
            showElement(questionTwo);
        })

    // Question 2

        var quest2 = document.querySelector('.q2-correct');
        quest2.addEventListener('click', function() {
            console.log(quest2);
            removeElement(questionTwo);
            showElement(questionThree);
            console.log(questionThree);

        })

    // Question 3
    
        var quest3 = document.querySelector('.q3-correct');
        quest3.addEventListener('click', function() {
            removeElement(questionThree);
            showElement(questionFour);

        })

    // Question 4

        var quest4 = document.querySelector('.q4-correct');
        quest4.addEventListener('click', function() {
            removeElement(questionFour);
            showElement(questionFive);
    
    // Question 5

        var quest5 = document.querySelector('.q5-correct');
        quest5.addEventListener('click', function() {
            removeElement(questionFive);
            showElement(questionSix);

    // Question 6

        var quest6 = document.querySelector('.q6-correct');
        quest6.addEventListener('click', function() {
            removeElement(questionSix);
            showElement(questionSeven);

    // Question 7

        var quest7 = document.querySelector('.q7-correct');
        quest7.addEventListener('click', function() {
            removeElement(questionSeven);
            showElement(questionEight);

    // Question 8

        var quest8 = document.querySelector('.q8-correct');
        quest8.addEventListener('click', function() {
            removeElement(questionEight);
            showElement(questionNine);

    // Question 9

        var quest9 = document.querySelector('.q9-correct');
        quest9.addEventListener('click', function() {
            removeElement(questionNine);
            showElement(questionTen);

    // Question 10

        var quest10 = document.querySelector('.q10-correct');
        quest10.addEventListener('click', function() {
            removeElement(questionTen);
            showElement(questionThree);

    
    
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

// save high scores

// create function

// function saveScore() {
//     scoreVariable
//     localStorage.setItem("scoreVariable", "High Score");
// }

// call function
