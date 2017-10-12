$(function(){

    //trivia questions taken from: http://www.usefultrivia.com/miscellaneous_trivia/dinosaur_trivia_index.html

    var q0 = {
        question: 'What dinosaur name means "fast thief?"',
        answer1: {
            class: "correctAnswer",
            content: "Velociraptor"},
        answer2: {
            class: "wrongAnswer",
            content: "Pteronodon"},
        answer3: {
            class: "wrongAnswer",
            content: "Nanotyrannus"},
        answer4: {
            class: "wrongAnswer",
            content: "Sinocalliopteryx"},
        value: 0
    };

    var q1 = {
        question: "What dinosaur was, for many years, mistakenly called a Brontosaurus?",
        answer1: {
            class: "correctAnswer",
            content: "Apatosaurus"},
        answer2: {
            class: "wrongAnswer",
            content: "Rigidosaurus"},
        answer3: {
            class: "wrongAnswer",
            content: "Brachiosaurus"},
        answer4: {
            class: "wrongAnswer",
            content: "Arcanosaurus"},
        value: 1
    };

    var q2 = {
        question: "Which dinosaur had fifteen horns?",
        answer1: {
            class: "correctAnswer",
            content: "Kosmoceratops"},
        answer2: {
            class: "wrongAnswer",
            content: "Pachyrhinosaurus"},
        answer3: {
            class: "wrongAnswer",
            content: "Stryacosaurus"},
        answer4: {
            class: "wrongAnswer",
            content: "Diabloceratops"},
        value: 2
    };

    var q3 = {
        question: "Which of the following dinosaurs was toothless?",
        answer1: {
            class: "correctAnswer",
            content: "Oviraptor"},
        answer2: {
            class: "wrongAnswer",
            content: "Diplodocus"},
        answer3: {
            class: "wrongAnswer",
            content: "Compsognathus"},
        answer4: {
            class: "wrongAnswer",
            content: "Apatosaurus"},
        value: 3
    };

    var q4 = {
        question: "What close relative of the Velociraptor could grow up to 7 meters (20 feet) long and weighed almost a ton?",
        answer1: {
            class: "correctAnswer",
            content: "Utahraptor"},
        answer2: {
            class: "wrongAnswer",
            content: "Nevadaraptor"},
        answer3: {
            class: "wrongAnswer",
            content: "Ohioraptor"},
        answer4: {
            class: "wrongAnswer",
            content: "Texasraptor"},
        value: 4
    };

    var q5 = {
        question: "What was the first dinosaur to be discovered?",
        answer1: {
            class: "correctAnswer",
            content: "Megalosaurus"},
        answer2: {
            class: "wrongAnswer",
            content: "Brontosaurus"},
        answer3: {
            class: "wrongAnswer",
            content: "Tyrannosaurus Rex"},
        answer4: {
            class: "wrongAnswer",
            content: "Giganotosaurus"},
        value: 5
    };

    var q6 = {
        question: "What dinosaur is believed to have weighed up to 110 tons?",
        answer1: {
            class: "correctAnswer",
            content: "Argentinosaurus"},
        answer2: {
            class: "wrongAnswer",
            content: "Perusaurus"},
        answer3: {
            class: "wrongAnswer",
            content: "Columbiosaurus"},
        answer4: {
            class: "wrongAnswer",
            content: "Brazilosaurus"},
        value: 6
    };

    var q7 = {
        question: "During what geologic period did dinosaurs first appear?",
        answer1: {
            class: "correctAnswer",
            content: "Triassic"},
        answer2: {
            class: "wrongAnswer",
            content: "Cretaceous"},
        answer3: {
            class: "wrongAnswer",
            content: "Cambrian"},
        answer4: {
            class: "wrongAnswer",
            content: "Jurassic"},
        value: 7
    };

    var q8 = {
        question: "Which of these dinosaurs was a meat eater?",
        answer1: {
            class: "correctAnswer",
            content: "Dromaeosaurus"},
        answer2: {
            class: "wrongAnswer",
            content: "Stegosaurus"},
        answer3: {
            class: "wrongAnswer",
            content: "Triceratops"},
        answer4: {
            class: "wrongAnswer",
            content: "Angulomastacator"},
        value: 8
    };

    var q9 = {
        question: "What is the nickname of the most complete T-rex specimen ever discovered?",
        answer1: {
            class: "correctAnswer",
            content: "Sue"},
        answer2: {
            class: "wrongAnswer",
            content: "May"},
        answer3: {
            class: "wrongAnswer",
            content: "Eve"},
        answer4: {
            class: "wrongAnswer",
            content: "Ann"},
        value: 9
    };

    var q10 = {
        question: "Which extinction event wiped out the dinosaurs?",
        answer1: {
            class: "correctAnswer",
            content: "Cretaceous-Paleogene"},
        answer2: {
            class: "wrongAnswer",
            content: "Ordovician-Silurian"},
        answer3: {
            class: "wrongAnswer",
            content: "Permian"},
        answer4: {
            class: "wrongAnswer",
            content: "Triassic-Jurassic"},
        value: 10
    };

    var q11 = {
        question: "What is the official state dinosaur of Colorado?",
        answer1: {
            class: "correctAnswer",
            content: "Stegosaurus"},
        answer2: {
            class: "wrongAnswer",
            content: "Allosaurus"},
        answer3: {
            class: "wrongAnswer",
            content: "Triceratops"},
        answer4: {
            class: "wrongAnswer",
            content: "Velociraptor"},
        value: 11
    };

    var q12 = {
        question: "What was the first non-carnivorous theropod fossil to be discovered?",
        answer1: {
            class: "correctAnswer",
            content: "Therizinosaur"},
        answer2: {
            class: "wrongAnswer",
            content: "Baronyx"},
        answer3: {
            class: "wrongAnswer",
            content: "Deinonychus"},
        answer4: {
            class: "wrongAnswer",
            content: "Tarbosaurus"},
        value: 12
    };

    var q13 = {
        question: "In what country were dinosaur fossils thought to be dragon bones?",
        answer1: {
            class: "correctAnswer",
            content: "China"},
        answer2: {
            class: "wrongAnswer",
            content: "South Africa"},
        answer3: {
            class: "wrongAnswer",
            content: "Brazil"},
        answer4: {
            class: "wrongAnswer",
            content: "Saudi Arabia"},
        value: 13
    };

    var q14 = {
        question: "How many wings did a Microraptor have?",
        answer1: {
            class: "correctAnswer",
            content: "Four"},
        answer2: {
            class: "wrongAnswer",
            content: "Two"},
        answer3: {
            class: "wrongAnswer",
            content: "Six"},
        answer4: {
            class: "wrongAnswer",
            content: "Three"},
        value: 14
    };

    var q15 = {
        question: "Which of the following dinosaurs was the smallest?",
        answer1: {
            class: "correctAnswer",
            content: "Compsognathus"},
        answer2: {
            class: "wrongAnswer",
            content: "Raptor"},
        answer3: {
            class: "wrongAnswer",
            content: "Troodon"},
        answer4: {
            class: "wrongAnswer",
            content: "Dilophosaurus"},
        value: 15
    };

    var q16 = {
        question: "What dinosaur fossil was originally mistaken for a type of bison?",
        answer1: {
            class: "correctAnswer",
            content: "Triceratops"},
        answer2: {
            class: "wrongAnswer",
            content: "Buffalosaurus"},
        answer3: {
            class: "wrongAnswer",
            content: "Allosaurus"},
        answer4: {
            class: "wrongAnswer",
            content: "Stegosaurus"},
        value: 16
    };

    var q17 = {
        question: "What were the direct ancestors of the dinosaurs?",
        answer1: {
            class: "correctAnswer",
            content: "Archosaurs"},
        answer2: {
            class: "wrongAnswer",
            content: "Eukaryotes"},
        answer3: {
            class: "wrongAnswer",
            content: "Sapheosaurs"},
        answer4: {
            class: "wrongAnswer",
            content: "Silesaurs"},
        value: 17
    };

    var q18 = {
        question: "What was the lifespan of a T. rex?",
        answer1: {
            class: "correctAnswer",
            content: "20-30 years"},
        answer2: {
            class: "wrongAnswer",
            content: "100-120 years"},
        answer3: {
            class: "wrongAnswer",
            content: "10-15 years"},
        answer4: {
            class: "wrongAnswer",
            content: "50-60 years"},
        value: 18
    };

    var q19 = {
        question: "Which dinosaur had the smallest brain for its body size?",
        answer1: {
            class: "correctAnswer",
            content: "Stegosaurus"},
        answer2: {
            class: "wrongAnswer",
            content: "Tyrannosaurus rex"},
        answer3: {
            class: "wrongAnswer",
            content: "Triceratops"},
        answer4: {
            class: "wrongAnswer",
            content: "Brachiosaurus"},
        value: 19
    };

    var qArr = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19];
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
    var highScore = 0;
    var newScore = false;

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
            $(qDiv).append('<div class="question panel-heading"><h2>' + qArr[randArr[i]].question + '</h2></div>');
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
        newScore = false;
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
        $("#stats").append(restartBtn);
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
        $(statsDiv).attr("class", "panel");
        if (correctState == true) {
            $(statsDiv).attr("class", "panel panel-success");
            $(statsDiv).append('<div class="panel-heading"><h2>Correct!<h2></div>');
        }
        else if (wrongState == true) {
            $(statsDiv).attr("class", "panel panel-danger");
            $(statsDiv).append('<div class="panel-heading"><h2>Wrong!<h2></div>');
            $(statsDiv).append('<div class="panel-body">Correct Answer:<br><span class="statsVar answerReveal">' + eval("q" + divArr[qCount].attr("value") + ".answer1.content") + '</span></div>');
        }
        else {
            $(statsDiv).attr("class", "panel panel-warning");
            $(statsDiv).append('<div class="panel-heading"><h2>Missed!</h2></div>');
            $(statsDiv).append('<div class="panel-body">Correct Answer:<br><span class="statsVar answerReveal">' + eval("q" + divArr[qCount].attr("value") + ".answer1.content") + '</span></div>');
        }
        if (qCount == 0) {
            setTimeout(function(){
                $("#stats").empty().css("display", "none");
                $("#stats").removeClass("panel-success").removeClass("panel-danger").removeClass("panel-warning").addClass("panel-info");
                $("#stats").append('<div class="panel-heading"><h2>Final Score:<h2></div>');
                $("#stats").append('<div class="panel-body statsCorrect">Correct: <span class="statsVar">' + userCorrect + '</span></div>');
                $("#stats").append('<div class="panel-body statsWrong">Wrong: <span class="statsVar">' + userWrong + '</span></div>');
                $("#stats").append('<div class="panel-body statsMissed">Missed: <span class="statsVar">' + userMissed + '</span></div>');
                if (highScore < userCorrect) {
                    highScore = userCorrect;
                    newScore = true;
                }
                $("#stats").append('<div class="panel-body statsScore">High Score: <span class="statsVar">' + highScore + '</span></div>');
                if (newScore == true) {
                    $(".statsScore").prepend('NEW ');
                }
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