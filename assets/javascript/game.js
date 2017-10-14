$(function(){
    
    var qArr = [
    
        {question: 'What dinosaur name means "fast thief?"',
        answer1: {class: "correctAnswer", content: "Velociraptor"},
        answer2: {class: "wrongAnswer", content: "Pteronodon"},
        answer3: {class: "wrongAnswer", content: "Nanotyrannus"},
        answer4: {class: "wrongAnswer", content: "Sinocalliopteryx"},},

        {question: "What dinosaur was, for many years, mistakenly called a Brontosaurus?",
        answer1: {class: "correctAnswer", content: "Apatosaurus"},
        answer2: {class: "wrongAnswer", content: "Rigidosaurus"},
        answer3: {class: "wrongAnswer", content: "Brachiosaurus"},
        answer4: {class: "wrongAnswer", content: "Arcanosaurus"},},

        {question: "Which dinosaur had fifteen horns?",
        answer1: {class: "correctAnswer", content: "Kosmoceratops"},
        answer2: {class: "wrongAnswer", content: "Pachyrhinosaurus"},
        answer3: {class: "wrongAnswer", content: "Stryacosaurus"},
        answer4: {class: "wrongAnswer", content: "Diabloceratops"},},

        {question: "Which of the following dinosaurs was toothless?",
        answer1: {class: "correctAnswer", content: "Oviraptor"},
        answer2: {class: "wrongAnswer", content: "Diplodocus"},
        answer3: {class: "wrongAnswer", content: "Compsognathus"},
        answer4: {class: "wrongAnswer", content: "Apatosaurus"},},

        {question: "What close relative of the Velociraptor could grow up to 7 meters (20 feet) long and weighed almost a ton?",
        answer1: {class: "correctAnswer", content: "Utahraptor"},
        answer2: {class: "wrongAnswer", content: "Nevadaraptor"},
        answer3: {class: "wrongAnswer", content: "Ohioraptor"},
        answer4: {class: "wrongAnswer", content: "Texasraptor"},},

        {question: "What was the first dinosaur to be discovered?",
        answer1: {class: "correctAnswer", content: "Megalosaurus"},
        answer2: {class: "wrongAnswer", content: "Brontosaurus"},
        answer3: {class: "wrongAnswer", content: "Tyrannosaurus Rex"},
        answer4: {class: "wrongAnswer", content: "Giganotosaurus"},},

        {question: "What dinosaur is believed to have weighed up to 110 tons?",
        answer1: {class: "correctAnswer", content: "Argentinosaurus"},
        answer2: {class: "wrongAnswer", content: "Perusaurus"},
        answer3: {class: "wrongAnswer", content: "Columbiosaurus"},
        answer4: {class: "wrongAnswer", content: "Brazilosaurus"},},

        {question: "During what geologic period did dinosaurs first appear?",
        answer1: {class: "correctAnswer", content: "Triassic"},
        answer2: {class: "wrongAnswer", content: "Cretaceous"},
        answer3: {class: "wrongAnswer", content: "Cambrian"},
        answer4: {class: "wrongAnswer", content: "Jurassic"},},

        {question: "Which of these dinosaurs was a meat eater?",
        answer1: {class: "correctAnswer", content: "Dromaeosaurus"},
        answer2: {class: "wrongAnswer", content: "Stegosaurus"},
        answer3: {class: "wrongAnswer", content: "Triceratops"},
        answer4: {class: "wrongAnswer", content: "Angulomastacator"},},

        {question: "What is the nickname of the most complete T-rex specimen ever discovered?",
        answer1: {class: "correctAnswer", content: "Sue"},
        answer2: {class: "wrongAnswer", content: "May"},
        answer3: {class: "wrongAnswer", content: "Eve"},
        answer4: {class: "wrongAnswer", content: "Ann"},},

        {question: "Which extinction event wiped out the dinosaurs?",
        answer1: {class: "correctAnswer", content: "Cretaceous-Paleogene"},
        answer2: {class: "wrongAnswer", content: "Ordovician-Silurian"},
        answer3: {class: "wrongAnswer", content: "Permian"},
        answer4: {class: "wrongAnswer", content: "Triassic-Jurassic"},},

        {question: "What is the official state dinosaur of Colorado?",
        answer1: {class: "correctAnswer", content: "Stegosaurus"},
        answer2: {class: "wrongAnswer", content: "Allosaurus"},
        answer3: {class: "wrongAnswer", content: "Triceratops"},
        answer4: {class: "wrongAnswer", content: "Velociraptor"},},

        {question: "What was the first non-carnivorous theropod fossil to be discovered?",
        answer1: {class: "correctAnswer", content: "Therizinosaur"},
        answer2: {class: "wrongAnswer", content: "Baronyx"},
        answer3: {class: "wrongAnswer", content: "Deinonychus"},
        answer4: {class: "wrongAnswer", content: "Tarbosaurus"},},

        {question: "In what country were dinosaur fossils thought to be dragon bones?",
        answer1: {class: "correctAnswer", content: "China"},
        answer2: {class: "wrongAnswer", content: "South Africa"},
        answer3: {class: "wrongAnswer", content: "Brazil"},
        answer4: {class: "wrongAnswer", content: "Saudi Arabia"},},

        {question: "How many wings did a Microraptor have?",
        answer1: {class: "correctAnswer", content: "Four"},
        answer2: {class: "wrongAnswer", content: "Two"},
        answer3: {class: "wrongAnswer", content: "Six"},
        answer4: {class: "wrongAnswer", content: "Three"},},

        {question: "Which of the following dinosaurs was the smallest?",
        answer1: {class: "correctAnswer", content: "Compsognathus"},
        answer2: {class: "wrongAnswer", content: "Raptor"},
        answer3: {class: "wrongAnswer", content: "Troodon"},
        answer4: {class: "wrongAnswer", content: "Dilophosaurus"},},

        {question: "What dinosaur fossil was originally mistaken for a type of bison?",
        answer1: {class: "correctAnswer", content: "Triceratops"},
        answer2: {class: "wrongAnswer", content: "Buffalosaurus"},
        answer3: {class: "wrongAnswer", content: "Allosaurus"},
        answer4: {class: "wrongAnswer", content: "Stegosaurus"},},

        {question: "What were the direct ancestors of the dinosaurs?",
        answer1: {class: "correctAnswer", content: "Archosaurs"},
        answer2: {class: "wrongAnswer", content: "Eukaryotes"},
        answer3: {class: "wrongAnswer", content: "Sapheosaurs"},
        answer4: {class: "wrongAnswer", content: "Silesaurs"},},

        {question: "What was the lifespan of a T. rex?",
        answer1: {class: "correctAnswer", content: "20-30 years"},
        answer2: {class: "wrongAnswer", content: "100-120 years"},
        answer3: {class: "wrongAnswer", content: "10-15 years"},
        answer4: {class: "wrongAnswer", content: "50-60 years"},},

        {question: "Which dinosaur had the smallest brain for its body size?",
        answer1: {class: "correctAnswer", content: "Stegosaurus"},
        answer2: {class: "wrongAnswer", content: "Tyrannosaurus rex"},
        answer3: {class: "wrongAnswer", content: "Triceratops"},
        answer4: {class: "wrongAnswer", content: "Brachiosaurus"},},

        {question: "The meteor that many scientists believe killed the dinosaurs struck in what modern-day country?",
        answer1: {class: "correctAnswer", content: "Mexico"},
        answer2: {class: "wrongAnswer", content: "Australia"},
        answer3: {class: "wrongAnswer", content: "United States"},
        answer4: {class: "wrongAnswer", content: "South Africa"},},

        {question: 'What dinosaur name means "covered lizard?"',
        answer1: {class: "correctAnswer", content: "Stegosaurus"},
        answer2: {class: "wrongAnswer", content: "Triceratops"},
        answer3: {class: "wrongAnswer", content: "Dimetrodon"},
        answer4: {class: "wrongAnswer", content: "Ankylosaurus"},},

        {question: "How many claws did a Velociraptor have on each hand?",
        answer1: {class: "correctAnswer", content: "Three"},
        answer2: {class: "wrongAnswer", content: "One"},
        answer3: {class: "wrongAnswer", content: "Four"},
        answer4: {class: "wrongAnswer", content: "Two"},},

        {question: 'What does "dinosaur" mean?',
        answer1: {class: "correctAnswer", content: "Terrible Lizard"},
        answer2: {class: "wrongAnswer", content: "Hungry Lizard"},
        answer3: {class: "wrongAnswer", content: "Killer Lizard"},
        answer4: {class: "wrongAnswer", content: "Evil Lizard"},},

        {question: "At the beginning of the Triassic period, how many continents were there?",
        answer1: {class: "correctAnswer", content: "One"},
        answer2: {class: "wrongAnswer", content: "Three"},
        answer3: {class: "wrongAnswer", content: "Seven"},
        answer4: {class: "wrongAnswer", content: "Two"},},

        {question: "How are the two groups of dinosaurs differentiated?",
        answer1: {class: "correctAnswer", content: "Hip Bones"},
        answer2: {class: "wrongAnswer", content: "Eating Habits"},
        answer3: {class: "wrongAnswer", content: "Number of Claws"},
        answer4: {class: "wrongAnswer", content: "Method of Reproduction"},},

        {question: "How many fossils are necessary to identify a new dinosaur species?",
        answer1: {class: "correctAnswer", content: "One"},
        answer2: {class: "wrongAnswer", content: "Five"},
        answer3: {class: "wrongAnswer", content: "Two"},
        answer4: {class: "wrongAnswer", content: "Seven"},},

        {question: "Who discovered the first fossilized dinosaur eggs?",
        answer1: {class: "correctAnswer", content: "Jean-Jacques Poech"},
        answer2: {class: "wrongAnswer", content: "Mary Anning"},
        answer3: {class: "wrongAnswer", content: "Gideon Mantell"},
        answer4: {class: "wrongAnswer", content: "Roy Chapman Andrews"},},

        {question: "Which continents have dinosaur fossils been found on?",
        answer1: {class: "correctAnswer", content: "All Seven Continents"},
        answer2: {class: "wrongAnswer", content: "North America & South America"},
        answer3: {class: "wrongAnswer", content: "Asia, Europe, & Africa"},
        answer4: {class: "wrongAnswer", content: "Africa, North America, & Asia"},},

        {question: "Where were the oldest dinosaur fossils in Canada found?",
        answer1: {class: "correctAnswer", content: "Nova Scotia"},
        answer2: {class: "wrongAnswer", content: "Yukon"},
        answer3: {class: "wrongAnswer", content: "Saskatchewan"},
        answer4: {class: "wrongAnswer", content: "Alberta"},},

    ]; //trivia questions taken from: http://www.usefultrivia.com/miscellaneous_trivia/dinosaur_trivia_index.html

    var aArr =  ["answer1", "answer2", "answer3", "answer4"];
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
    var newHigh;

    function startButton() {
        $("#qTime").html('<div class="progress"><div class="progress-bar progress-bar-primary" role="progressbar" aria-valuemin="0" aria-valuemax="100" style="width: 100%"></div></div>');
        var startBtn = $("<button>");
        $(startBtn).addClass("btn btn-lg btn-success").html("START");
        $("#qStart").append(startBtn);
    }

    function restartButton() {
        var restartBtn = $("<button>");
        $(restartBtn).addClass("btn btn-lg btn-success").html("REPLAY?");
        $("#stats").append(restartBtn);
    }

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
            $(qDiv).attr("id", "qDiv").attr("class", "panel panel-primary").append('<div class="question panel-heading"><h2>' + qArr[randArr[i]].question + '</h2></div>');
            for (k = 0; k < aArr.length; k++) {
                $(qDiv).append('<div class="' + qArr[randArr[i]][aArr[k]].class + ' panel-body answer" ><h3>' + qArr[randArr[i]][aArr[k]].content + '</h3></div>');
            }
            divArr.push(qDiv);
        }
    }

    function startGame() {
        $("#qStart").remove();
        divArr = [];
        randArr = [];
        qCount = 9;
        userCorrect = 0;
        correctState = false;
        userWrong = 0;
        wrongState = false;
        userMissed = 0;
        newHigh = false;
        qCreate();
        $(".progress-bar").removeClass('progress-bar-primary').addClass('progress-bar-success');
        timeActual = time;
        intervalId = setInterval(countDown, 1000);
        $("#qDisplay").html(divArr[qCount]).css("display", "none").fadeIn("fast");
    }

    function countDown() {
        timeActual--;
        var percent = timeActual / time * 100;
        $(".progress-bar").css("width", String(percent + "%"));
        if (percent <= 33.34) {
            $(".progress-bar").removeClass('progress-bar-warning').addClass('progress-bar-danger');
        }
        else if (percent <= 66.67) {
            $(".progress-bar").removeClass('progress-bar-success').addClass('progress-bar-warning');
        }
        if (timeActual == 0) {
            userMissed++;
            qTransition();
        }
    }

    function qTransition() {
        clearInterval(intervalId);
        $(".progress-bar").css("width", "100%").removeClass('progress-bar-success').removeClass('progress-bar-warning').removeClass('progress-bar-danger').addClass('progress-bar-primary');
        userStats();
        if (qCount > 0) {
            timeActual = 3;
            intervalId = setInterval(function() {
                timeActual--;
                if (timeActual == 0) {
                    clearInterval(intervalId);
                    correctState = false;
                    wrongState = false;
                    qCount--;
                    $(".progress-bar").removeClass('progress-bar-primary').addClass('progress-bar-success');
                    $("#qDisplay").html(divArr[qCount]).css("display", "none").fadeIn("fast");
                    timeActual = time;                 
                    intervalId = setInterval(countDown, 1000);
                }
            }, 1000);
        }
    }

    function userStats() {
        var correctReveal = '<div class="panel-body">Correct Answer:<br><span class="statsVar answerReveal">' + $("#qDiv .correctAnswer").text() + '</span></div>';
        var statsDiv = $("<div>");
        $(statsDiv).attr("id", "stats").attr("class", "panel");
        if (correctState == true) {
            $(statsDiv).attr("class", "panel panel-success").append('<div class="panel-heading"><h2>Correct!<h2></div>');
        }
        else if (wrongState == true) {
            $(statsDiv).attr("class", "panel panel-danger").append('<div class="panel-heading"><h2>Wrong!<h2></div>').append(correctReveal);
        }
        else {
            $(statsDiv).attr("class", "panel panel-warning").append('<div class="panel-heading"><h2>Missed!</h2></div>').append(correctReveal);
        }
        if (qCount == 0) {
            setTimeout(function(){
                $("#stats").empty().css("display", "none").removeClass("panel-success").removeClass("panel-danger").removeClass("panel-warning").addClass("panel-info")
                    .append('<div class="panel-heading"><h2>Final Score:<h2></div>')
                    .append('<div class="panel-body statsCorrect">Correct: <span class="statsVar">' + userCorrect + '</span></div>')
                    .append('<div class="panel-body statsWrong">Wrong: <span class="statsVar">' + userWrong + '</span></div>')
                    .append('<div class="panel-body statsMissed">Missed: <span class="statsVar">' + userMissed + '</span></div>');
                if (highScore < userCorrect) {
                    highScore = userCorrect;
                    newHigh = true;
                }
                $("#stats").append('<div class="panel-body statsScore">High Score: <span class="statsVar">' + highScore + '</span></div>');
                if (newHigh == true) {
                    $(".statsScore").prepend('NEW ');
                    if (highScore == 10) {
                        $(".statsScore").append(' <i class="fa fa-trophy" aria-hidden="true"></i>');
                    }
                }
                restartButton();
                $("#stats").fadeIn("fast");
                }, 1000 * 3);   
        }
        else {
            $(statsDiv).append('<div class="panel-body">Questions Remaining: <span class="statsVar">' + qCount + '</span></div>');
        }
        $("#qDisplay").html(statsDiv).css("display", "none").fadeIn("fast");
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