function ask() {
    window.firstNum = Math.floor(Math.random() * 10) + 1;
    window.secondNum = Math.floor(Math.random() * 10) + 1;
    window.operator = ["*", "+", "-"][Math.floor(Math.random() * 3)];

    window.question = "How much is " + firstNum + " " + operator + " " + secondNum + "?<br><input type='number' name='input'><br><input id='check' type='submit' value='Check Answer'>"
    window.ansCorrect = eval(firstNum + operator + secondNum);

    $('#question').html(question);
    window.count++;
}

$('#question').submit(function () {
    var ans = $('input[type=number]').val();
    window.question = " Correct Answer: " + firstNum + " " + operator + " " + secondNum + " = " + ansCorrect + "<br /> Your Guess: " + ans;

    if (ans == ansCorrect) {
        $('#answer').html(question + "<br><i>Congratulations, you were right!</i><br>");
        window.countRight++;
    } else {
        $('#answer').html(question + "<br><i>Sorry, better luck next time.</i><br>");
    }
    $('#total').html("Correct: " + countRight + " / " + count);
    ask();
    return false;
});

window.countRight = 0;
window.count = 0;
ask();
