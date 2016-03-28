function askQuestion() {
    window.firstNumber = Math.floor(Math.random() * 10) + 1;
    window.secondNumber = Math.floor(Math.random() * 10) + 1;
    window.operator = ["*", "+", "-", "/"][Math.floor(Math.random() * 4)];

    window.question = "<strong>What is " + firstNumber + " " + operator + " " + secondNumber + "?</strong><br /><input type='number' step='.1' name='input'><br /><input id='check' type='submit' value='Check Answer'>"

    // Rounds to one decimal place and remains a number rather than a string
    window.answerCorrect = +eval(firstNumber + operator + secondNumber).toFixed(1);

    $('#question').html(question);
    window.countTotal++;
}

$('#question').submit(function () {
    var guess = $('input[type=number]').val();
    window.question = "Correct Answer: " + firstNumber + " " + operator + " " + secondNumber + " = " + answerCorrect + "<br /> Your Guess: " + guess;

    if (guess == answerCorrect) {
        $('#feedback').html(question + "<br /><i><b>Congratulations, you're right!</b></i><br />");
        window.countCorrect++;
    } else {
        $('#feedback').html(question + "<br /><b><i>Sorry, better luck next time.</i></b><br />");
    }

    $('#total').html("Score: " + countCorrect + " / " + countTotal);
    askQuestion();
    return false;
});

$('#reset').click(function() {
    location.reload();
});

window.countCorrect = 0;
window.countTotal = 0;
askQuestion();