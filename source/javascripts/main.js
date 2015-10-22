function ask() {
    window.firstNumber = Math.floor(Math.random() * 10) + 1;
    window.secondNumber = Math.floor(Math.random() * 10) + 1;
    window.operator = ["*", "+", "-"][Math.floor(Math.random() * 3)];

    window.question = "How much is " + firstNumber + " " + operator + " " + secondNumber + "?<br><input type='number' name='input'><br><input id='check' type='submit' value='Check Answer'>"
    window.answerCorrect = eval(firstNumber + operator + secondNumber);

    $('#question').html(question);
    window.count++;
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
    $('#total').html("Score: " + countRight + " / " + count);
    ask();
    return false;
});

window.countRight = 0;
window.count = 0;
ask();