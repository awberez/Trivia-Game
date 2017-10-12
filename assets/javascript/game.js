$(function(){

    var q0 = {
        question: "What is the answer? 1",
        answer1: {
            class: "correctAnswer",
            content: "Correct Answer 1"
        },
        answer2: {
            class: "wrongAnswer",
            content: "Wrong Answer 1"
        },
        answer3: {
            class: "wrongAnswer",
            content: "Wrong Answer 2"
        },
        answer4: {
            class: "wrongAnswer",
            content: "Wrong Answer 3"
        },
        value: 0
    };

    var q1 = {
        question: "What is the answer? 2",
        answer1: {
            class: "correctAnswer",
            content: "Correct Answer 2"
        },
        answer2: {
            class: "wrongAnswer",
            content: "Wrong Answer 1"
        },
        answer3: {
            class: "wrongAnswer",
            content: "Wrong Answer 2"
        },
        answer4: {
            class: "wrongAnswer",
            content: "Wrong Answer 3"
        },
        value: 1
    };

    var q2 = {
        question: "What is the answer? 3",
        answer1: {
            class: "correctAnswer",
            content: "Correct Answer 3"
        },
        answer2: {
            class: "wrongAnswer",
            content: "Wrong Answer 1"
        },
        answer3: {
            class: "wrongAnswer",
            content: "Wrong Answer 2"
        },
        answer4: {
            class: "wrongAnswer",
            content: "Wrong Answer 3"
        },
        value: 2
    };

    var q3 = {
        question: "What is the answer? 4",
        answer1: {
            class: "correctAnswer",
            content: "Correct Answer 4"
        },
        answer2: {
            class: "wrongAnswer",
            content: "Wrong Answer 1"
        },
        answer3: {
            class: "wrongAnswer",
            content: "Wrong Answer 2"
        },
        answer4: {
            class: "wrongAnswer",
            content: "Wrong Answer 3"
        },
        value: 3
    };

    var q4 = {
        question: "What is the answer? 5",
        answer1: {
            class: "correctAnswer",
            content: "Correct Answer 5"
        },
        answer2: {
            class: "wrongAnswer",
            content: "Wrong Answer 1"
        },
        answer3: {
            class: "wrongAnswer",
            content: "Wrong Answer 2"
        },
        answer4: {
            class: "wrongAnswer",
            content: "Wrong Answer 3"
        },
        value: 4
    };

    var q5 = {
        question: "What is the answer? 6",
        answer1: {
            class: "correctAnswer",
            content: "Correct Answer 6"
        },
        answer2: {
            class: "wrongAnswer",
            content: "Wrong Answer 1"
        },
        answer3: {
            class: "wrongAnswer",
            content: "Wrong Answer 2"
        },
        answer4: {
            class: "wrongAnswer",
            content: "Wrong Answer 3"
        },
        value: 5
    };

    var q6 = {
        question: "What is the answer? 7",
        answer1: {
            class: "correctAnswer",
            content: "Correct Answer 7"
        },
        answer2: {
            class: "wrongAnswer",
            content: "Wrong Answer 1"
        },
        answer3: {
            class: "wrongAnswer",
            content: "Wrong Answer 2"
        },
        answer4: {
            class: "wrongAnswer",
            content: "Wrong Answer 3"
        },
        value: 6
    };

    var q7 = {
        question: "What is the answer? 8",
        answer1: {
            class: "correctAnswer",
            content: "Correct Answer 8"
        },
        answer2: {
            class: "wrongAnswer",
            content: "Wrong Answer 1"
        },
        answer3: {
            class: "wrongAnswer",
            content: "Wrong Answer 2"
        },
        answer4: {
            class: "wrongAnswer",
            content: "Wrong Answer 3"
        },
        value: 7
    };

    var q8 = {
        question: "What is the answer? 9",
        answer1: {
            class: "correctAnswer",
            content: "Correct Answer 9"
        },
        answer2: {
            class: "wrongAnswer",
            content: "Wrong Answer 1"
        },
        answer3: {
            class: "wrongAnswer",
            content: "Wrong Answer 2"
        },
        answer4: {
            class: "wrongAnswer",
            content: "Wrong Answer 3"
        },
        value: 8
    };

    var q9 = {
        question: "What is the answer? 10",
        answer1: {
            class: "correctAnswer",
            content: "Correct Answer 10"
        },
        answer2: {
            class: "wrongAnswer",
            content: "Wrong Answer 1"
        },
        answer3: {
            class: "wrongAnswer",
            content: "Wrong Answer 2"
        },
        answer4: {
            class: "wrongAnswer",
            content: "Wrong Answer 3"
        },
        value: 9
    };

    var qArr = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9];
    var aArr =  [1, 2, 3, 4];
    var divArr = [];
    var randArr;

    var qCount = 9;
    var time = 30;
    var timeActual;
    var intervalId;

    var userCorrect = 0;
    var correctState = false;
    var userWrong = 0;
    var wrongState = false;
    var userMissed = 0;

    function qCreate() {
        randArr = [];
        for (i=0; i<qArr.length; i++) {
            randArr.push(i);
        }
        randArr.sort(function(){return 0.5 - Math.random()});
        for (i=0; i<randArr.length; i++) {
            aArr.sort(function(){return 0.5 - Math.random()});
            var qDiv = $("<div>");
            $(qDiv).attr("value", qArr[randArr[i]].value);
            $(qDiv).append('<div class="question text-center"><h2>' + qArr[randArr[i]].question + '</h2></div>');
            for (j=0; j<aArr.length; j++) {
            $(qDiv).append('<div class="' + eval("qArr[randArr[i]].answer" + aArr[j] + ".class") + ' answer" ><h3>' + eval("qArr[randArr[i]].answer" + aArr[j] + ".content") + '</h3></div>');
            }
            divArr.push(qDiv);
        }
    }

    function startGame() {
        var startBtn = $("<button>");
        $(startBtn).addClass("btn btn-lg start-button");
        $(startBtn).html("Start");
        $("#qTime").append(startBtn);
    }

    function countDown() {
        timeActual--;
        $(".progress-bar").css("width", eval('"' + timeActual / time * 100 + '%"'));
        if (timeActual / time * 100 <= 33.34) {
            $(".progress-bar").removeClass('progress-bar-warning').addClass('progress-bar-danger');
        }
        else if (timeActual / time * 100 <= 66.65) {
            $(".progress-bar").removeClass('progress-bar-success').addClass('progress-bar-warning');
        }
        if (timeActual == 0) {
            userMissed++;
            qTransition();
        }
    }

    function qTransition() {
        clearInterval(intervalId);
        $(".progress-bar").css("width", "100%");
        $(".progress-bar").removeClass('progress-bar-success').removeClass('progress-bar-info').removeClass('progress-bar-warning').removeClass('progress-bar-danger').addClass('progress-bar-primary');
        if (qCount == 0) {
            $("#qDisplay").html('<div class="stats"><h1>Final Score:</h1></div>');
            userStats();
            $(".remaining").remove();
        }
        else {
            userStats();
            timeActual = 3;
            intervalId = setInterval(function() {
                timeActual--;
                if (timeActual == 0) {
                    clearInterval(intervalId);
                    correctState = false;
                    wrongState = false;
                    qCount--;
                    $(".progress-bar").removeClass('progress-bar-primary').addClass('progress-bar-success');
                    $("#qDisplay").html(divArr[qCount]);
                    timeActual = time;                 
                    intervalId = setInterval(countDown, 1000);
                }
            }, 1000);
        }
    }

    function userStats() {
        var statsDiv = $("<div>");
        $(statsDiv).attr("class", "stats text-center")
        if (correctState == true) {
            $(statsDiv).append('<div class="correct">Correct!</div>');
        }
        else if (wrongState == true) {
            $(statsDiv).append('<div class="wrong">Wrong!</div>');
            $(statsDiv).append('<div>Correct Answer: <span class="statsVar answerReveal">' + eval("q" + divArr[qCount].attr("value") + ".answer1.content") + '</span></div>');
        }
        else {
            $(statsDiv).append('<div class="wrong">Missed!</div>');
            $(statsDiv).append('<div>Correct Answer: <span class="statsVar answerReveal">' + eval("q" + divArr[qCount].attr("value") + ".answer1.content") + '</span></div>');
        }
        $(statsDiv).append('<div>Correct: <span class="statsVar">' + userCorrect + '</span></div>');
        $(statsDiv).append('<div>Wrong: <span class="statsVar">' + userWrong + '</span></div>');
        $(statsDiv).append('<div>Missed: <span class="statsVar">' + userMissed + '</span></div>');
        $(statsDiv).append('<div class="remaining">Questions Remaining: <span class="statsVar">' + qCount + '</span></div>');
        $("#qDisplay").html(statsDiv);
    }

    qCreate();
    startGame();

    $(document).on("click", ".start-button", function () {
        timeActual = time;
        $("#qTime").html('<div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div>');
        intervalId = setInterval(countDown, 1000);
        $("#qDisplay").html(divArr[qCount]);
    });

    $(document).on("click", ".correctAnswer", function () {
        correctState = true;
        userCorrect++;
        qTransition();
    });

    $(document).on("click", ".wrongAnswer", function () {
        wrongState = true;
        userWrong++;
        qTransition();
    });
  
});






























