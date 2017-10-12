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
    var time = 10;
    var timeActual;
    var intervalId;

    var userCorrect = 0;
    var userWrong = 0;
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
            $(qDiv).append('<div class="question text-center"><h1>' + qArr[randArr[i]].question + '</h1></div>');
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
        $("#qButton").append(startBtn);
    }
    
    function timerBar() {
        if (timeActual / time * 100 <= 25) {
            $(".progress-bar").removeClass('progress-bar-warning').addClass('progress-bar-danger');
        }
        else if (timeActual / time * 100 <= 50) {
            $(".progress-bar").removeClass('progress-bar-info').addClass('progress-bar-warning');
        }
        else if (timeActual / time * 100 <= 75) {
            $(".progress-bar").removeClass('progress-bar-success').addClass('progress-bar-info');
        }
    }

    function countDown() {
        timeActual--;
        $(".progress-bar").css("width", eval('"' + timeActual / time * 100 + '%"'));
        timerBar();
        if (timeActual == 0) {
            $("#qDisplay").html('<div class="wrong stats"><h1>Missed!</h1></div>');
            $("#qDisplay").append('<div class="stats"><h3>The correct answer is: </h3><i>' + eval("q" + divArr[qCount].attr("value") + ".answer1.content") + '</i></div>');
            userMissed++;
            qTransition();
        }
    }

    function qTransition() {
        clearInterval(intervalId);
        $(".progress-bar").css("width", "100%");
        $(".progress-bar").removeClass('progress-bar-success').removeClass('progress-bar-info').removeClass('progress-bar-warning').removeClass('progress-bar-danger').addClass('progress-bar-primary');
        if (qCount == 0) {
            $("#qDisplay").html('<h1>Final Score:</h1>');
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
        $("#qDisplay").append('<div class="stats"><h3>Correct Answers:</h3> ' + userCorrect + '</div>');
        $("#qDisplay").append('<div class="stats"><h3>Wrong Answers:</h3> ' + userWrong + '</div>');
        $("#qDisplay").append('<div class="stats"><h3>Missed Answers:</h3> ' + userMissed + '</div>');
        $("#qDisplay").append('<div class="remaining stats"><h3>Questions Remaining:</h3> ' + qCount + '</div>');
    }

    qCreate();
    startGame();

    $(document).on("click", ".start-button", function () {
        timeActual = time;
        $("#qButton").empty();
        $("#qTime").html('<br><div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div>');
        intervalId = setInterval(countDown, 1000);
        $("#qDisplay").html(divArr[qCount]);
    });

    $(document).on("click", ".correctAnswer", function () {
        $("#qDisplay").html('<div class="correct stats"><h1>Correct!</h1></div>');
        userCorrect++;
        qTransition();
    });

    $(document).on("click", ".wrongAnswer", function () {
        $("#qDisplay").html('<div class="wrong stats"><h1>Wrong!</h1></div>');
        $("#qDisplay").append('<div class="stats"><h3>The correct answer is: </h3><i>' + eval("q" + divArr[qCount].attr("value") + ".answer1.content") + '</i></div>');
        userWrong++;
        qTransition();
    });
  
});






























