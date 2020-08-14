


    // var questions =

    // var score = 0;

 


    // TIMER

    // var startTime = document.getElementById('#start-button');
    var secondsDisplay = document.querySelector("#seconds");

    var secondsRemain = 60;

    var start = document.querySelector("#start-button");

    start.addEventListener("click", function () {
        var secondsInterval = setInterval(function () {
            secondsRemain--;
            secondsDisplay.innerText = secondsRemain;
            
            if (secondsRemain === 0) {
                clearInterval(secondsInterval);
            }

            
        }, 1000);
        
        removeElement (start);
        
        var questionOne = document.getElementById("q1");
        showElement (questionOne);


    });

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