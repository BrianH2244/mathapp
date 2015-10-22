function askQuestion() {
    window.firstNumber = Math.floor(Math.random() * 10) + 1;
    window.secondNumber = Math.floor(Math.random() * 10) + 1;
    window.operator = ["*", "+", "-"][Math.floor(Math.random() * 3)];

    window.question = "<b>How much is " + firstNumber + " " + operator + " " + secondNumber + "?</b><br><input type='number' name='input'><br><input id='check' type='submit' value='Check Answer'>"
    window.answerCorrect = eval(firstNumber + operator + secondNumber);

    $('#question').html(question);
    window.countTotal++;
}

$('#question').submit(function () {
    var guess = $('input[type=number]').val();
    window.question = " Correct Answer: " + firstNumber + " " + operator + " " + secondNumber + " = " + answerCorrect + "<br /> Your Guess: " + guess;

    if (guess == answerCorrect) {
        $('#feedback').html(question + "<br><i><b>Congratulations, you were right!</b></i><br>");
        window.countRight++;
    } else {
        $('#feedback').html(question + "<br><i><b>Sorry, better luck next time.</b></i><br>");
    }
    $('#total').html("Score: " + countRight + " / " + countTotal);
    askQuestion();
    return false;
});

$('#reset').click(function() {
    location.reload();
});

window.countRight = 0;
window.countTotal = 0;
askQuestion();
