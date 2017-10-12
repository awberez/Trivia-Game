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
    var divArr;
    var randArr;

    var qCount;
    var time = 30;
    var timeActual;
    var intervalId;

    var userCorrect;
    var correctState;
    var userWrong;
    var wrongState;
    var userMissed;

    function arrRandomize(arr) {
        var n = arr.length;
        var tempArr = [];
        for (j = 0; j < n-1; j++) {
            tempArr.push(arr.splice(Math.floor(Math.random()*arr.length),1)[0]);
        }
        tempArr.push(arr[0]);
        return tempArr;
    }

    function qCreate() {
        for (i = 0; i < qArr.length; i++) {
            randArr.push(i);
        }
        randArr = arrRandomize(randArr);
        for (i = 0; i < randArr.length; i++) {
            aArr = arrRandomize(aArr);
            var qDiv = $("<div>");
            $(qDiv).attr("id", "qDiv");
            $(qDiv).attr("class", "panel panel-primary");
            $(qDiv).attr("value", qArr[randArr[i]].value);
            $(qDiv).append('<div class="question panel-heading text-center"><h2>' + qArr[randArr[i]].question + '</h2></div>');
            for (k = 0; k < aArr.length; k++) {
            $(qDiv).append('<div class="' + eval("qArr[randArr[i]].answer" + aArr[k] + ".class") + ' panel-body answer" ><h3>' + eval("qArr[randArr[i]].answer" + aArr[k] + ".content") + '</h3></div>');
            }
            divArr.push(qDiv);
        }
    }

    function startGame() {
        $("#qStart").empty();
        divArr = [];
        randArr = [];
        qCount = 9;
        userCorrect = 0;
        correctState = false;
        userWrong = 0;
        wrongState = false;
        userMissed = 0;
        qCreate();
        $(".progress-bar").removeClass('progress-bar-primary').addClass('progress-bar-success');
        timeActual = time;
        intervalId = setInterval(countDown, 1000);
        $("#qDisplay").html(divArr[qCount]).css("display", "none").fadeIn("slow");
    }

    function startButton() {
        $("#qTime").html('<div class="progress"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div>');
        var startBtn = $("<button>");
        $(startBtn).addClass("btn btn-lg btn-success start-button");
        $(startBtn).html("START");
        $("#qStart").append(startBtn);
    }

    function restartButton() {
        var restartBtn = $("<button>");
        $(restartBtn).addClass("btn btn-lg btn-success restart-button");
        $(restartBtn).html("REPLAY?");
        var restartDiv = $("<div>");
        $(restartDiv).attr("class", "panel-body");
        $(restartDiv).append(restartBtn);
        $("#stats").append(restartDiv);
    }

    function countDown() {
        timeActual--;
        $(".progress-bar").css("width", eval('"' + timeActual / time * 100 + '%"'));
        if (timeActual / time * 100 <= 33.34) {
            $(".progress-bar").removeClass('progress-bar-warning').addClass('progress-bar-danger');
        }
        else if (timeActual / time * 100 <= 66.67) {
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
        $(".progress-bar").removeClass('progress-bar-success').removeClass('progress-bar-warning').removeClass('progress-bar-danger').addClass('progress-bar-primary');
        if (qCount == 0) {
            userStats();
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
                    $("#qDisplay").html(divArr[qCount]).css("display", "none").fadeIn("slow");
                    timeActual = time;                 
                    intervalId = setInterval(countDown, 1000);
                }
            }, 1000);
        }
    }

    function userStats() {
        var statsDiv = $("<div>");
        $(statsDiv).attr("id", "stats");
        $(statsDiv).attr("class", "panel text-center");
        if (correctState == true) {
            $(statsDiv).attr("class", "panel panel-success text-center");
            $(statsDiv).append('<div class="panel-heading"><h2>Correct!<h2></div>');
        }
        else if (wrongState == true) {
            $(statsDiv).attr("class", "panel panel-danger text-center");
            $(statsDiv).append('<div class="panel-heading"><h2>Wrong!<h2></div>');
            $(statsDiv).append('<div class="panel-body">Correct Answer: <span class="statsVar answerReveal">' + eval("q" + divArr[qCount].attr("value") + ".answer1.content") + '</span></div>');
        }
        else {
            $(statsDiv).attr("class", "panel panel-warning text-center");
            $(statsDiv).append('<div class="panel-heading"><h2>Missed!</h2></div>');
            $(statsDiv).append('<div class="panel-body">Correct Answer: <span class="statsVar answerReveal">' + eval("q" + divArr[qCount].attr("value") + ".answer1.content") + '</span></div>');
        }
        if (qCount == 0) {
            setTimeout(function(){
                $("#stats").empty().css("display", "none");
                $("#stats").removeClass("panel-success").removeClass("panel-danger").removeClass("panel-warning").addClass("panel-info");
                $("#stats").append('<div class="panel-heading"><h2>Final Score:<h2></div>');
                $("#stats").append('<div class="panel-body">Correct: <span class="label label-success statsVar">' + userCorrect + '</span></div>');
                $("#stats").append('<div class="panel-body">Wrong: <span class="label label-danger statsVar">' + userWrong + '</span></div>');
                $("#stats").append('<div class="panel-body">Missed: <span class="label label-warning statsVar">' + userMissed + '</span></div>');
                restartButton();
                $("#stats").fadeIn("slow");
                }, 1000 * 3);   
        }
        else {
            $(statsDiv).append('<div class="panel-body">Questions Remaining: <span class="statsVar">' + qCount + '</span></div>');
        }
        $("#qDisplay").html(statsDiv).css("display", "none").fadeIn("slow");
    }

    startButton();

    $(document).on("click", ".btn", function () {
        startGame();
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






























