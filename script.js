
$(document).ready(function () {

    $('div#question-one,#question-two').hide();

    let score = 0;




    // TIMER

    // var startTime = document.getElementById('#start-button');
    var secondsDisplay = document.querySelector("#seconds");

    var secondsRemain = 110;

    var start = document.querySelector("#start-button");

    start.addEventListener("click", function () {
        var secondsInterval = setInterval(function () {
            secondsRemain--;
            secondsDisplay.innerText = secondsRemain;

            if (secondsRemain === 0) {
                clearInterval(secondsInterval);
            }

        }, 1000);


    });

}

    // time decreases with wrong answer

    // reaches zero, game over

    // all questions answered, game over

// Answer question with click

    // switches to new question

// Game Over! icon

// Save score and initials