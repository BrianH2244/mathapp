
    function ask() {
    window.a = Math.floor(Math.random() * 10) + 1;
    window.b = Math.floor(Math.random() * 10) + 1;
    window.op = ["*", "+", "-"][Math.floor(Math.random()*3)];

    window.question = "How much is " + a + " " + op + " " + b + "?<br><input type='number' name='input'><br><input id='check' type='submit' value='Check Answer'>"
    window.ansCorrect = eval( a + op + b);
    
    $('#question').html(question);
    window.count++;
}

$('#question').submit(function() {
    var ans = $('input[type=number]').val();
    window.question = " <b>"+count+".</b> " + a + " " + op + " " + b + " = " + ansCorrect + "<br /> Your Guess: " + ans;
    if (ans == ansCorrect) {
        $('#answer').append(question + "<br><i>You were right!!</i><br>");
        window.countRight++;
    } else {
        $('#answer').append(question + "<br><i>You were wrong.</i><br>");
    }
    $('#total').html("Correct: " + countRight + " / " + count);
    ask();
    return false;
});

window.countRight=0;window.count=0;
ask();
