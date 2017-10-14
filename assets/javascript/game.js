$(function(){
    
    var qArr = [
    
        {question: 'What dinosaur name means "fast thief?"',
        answer1: "Velociraptor", answer2: "Pteronodon", answer3: "Nanotyrannus", answer4: "Sinocalliopteryx"},

        {question: "What dinosaur was, for many years, mistakenly called a Brontosaurus?",
        answer1: "Apatosaurus", answer2: "Rigidosaurus", answer3: "Brachiosaurus", answer4: "Arcanosaurus"},

        {question: "Which dinosaur had fifteen horns?",
        answer1: "Kosmoceratops", answer2: "Pachyrhinosaurus", answer3: "Stryacosaurus", answer4: "Diabloceratops"},

        {question: "Which of the following dinosaurs was toothless?",
        answer1: "Oviraptor", answer2: "Diplodocus", answer3: "Compsognathus", answer4: "Apatosaurus"},

        {question: "What close relative of the Velociraptor could grow up to 7 meters (20 feet) long and weighed almost a ton?",
        answer1: "Utahraptor", answer2: "Nevadaraptor", answer3: "Ohioraptor", answer4: "Texasraptor"},

        {question: "What was the first dinosaur to be discovered?",
        answer1: "Megalosaurus", answer2: "Brontosaurus", answer3: "Tyrannosaurus Rex", answer4: "Giganotosaurus"},

        {question: "What dinosaur is believed to have weighed up to 110 tons?",
        answer1: "Argentinosaurus", answer2: "Perusaurus", answer3: "Columbiosaurus", answer4: "Brazilosaurus"},

        {question: "During what geologic period did dinosaurs first appear?",
        answer1: "Triassic", answer2: "Cretaceous", answer3: "Cambrian", answer4: "Jurassic"},

        {question: "Which of these dinosaurs was a meat eater?",
        answer1: "Dromaeosaurus", answer2: "Stegosaurus", answer3: "Triceratops", answer4: "Angulomastacator"},

        {question: "What is the nickname of the most complete T-rex specimen ever discovered?",
        answer1: "Sue", answer2: "May", answer3: "Eve", answer4: "Ann"},

        {question: "Which extinction event wiped out the dinosaurs?",
        answer1: "Cretaceous-Paleogene", answer2: "Ordovician-Silurian", answer3: "Permian", answer4: "Triassic-Jurassic"},

        {question: "What is the official state dinosaur of Colorado?",
        answer1: "Stegosaurus", answer2: "Allosaurus", answer3: "Triceratops", answer4: "Velociraptor"},

        {question: "What was the first non-carnivorous theropod fossil to be discovered?",
        answer1: "Therizinosaur", answer2: "Baronyx", answer3: "Deinonychus", answer4: "Tarbosaurus"},

        {question: "In what country were dinosaur fossils thought to be dragon bones?",
        answer1: "China", answer2: "South Africa", answer3: "Brazil", answer4: "Saudi Arabia"},

        {question: "How many wings did a Microraptor have?",
        answer1: "Four", answer2: "Two", answer3: "Six", answer4: "Three"},

        {question: "Which of the following dinosaurs was the smallest?",
        answer1: "Compsognathus", answer2: "Raptor", answer3: "Troodon", answer4: "Dilophosaurus"},

        {question: "What dinosaur fossil was originally mistaken for a type of bison?",
        answer1: "Triceratops", answer2: "Buffalosaurus", answer3: "Allosaurus", answer4: "Stegosaurus"},

        {question: "What were the direct ancestors of the dinosaurs?",
        answer1: "Archosaurs", answer2: "Eukaryotes", answer3: "Sapheosaurs", answer4: "Silesaurs"},

        {question: "What was the lifespan of a T. rex?",
        answer1: "20-30 years", answer2: "100-120 years", answer3: "10-15 years", answer4: "50-60 years"},

        {question: "Which dinosaur had the smallest brain for its body size?",
        answer1: "Stegosaurus", answer2: "Tyrannosaurus rex", answer3: "Triceratops", answer4: "Brachiosaurus"},

        {question: "The meteor that many scientists believe killed the dinosaurs struck in what modern-day country?",
        answer1: "Mexico", answer2: "Australia", answer3: "United States", answer4: "South Africa"},

        {question: 'What dinosaur name means "covered lizard?"',
        answer1: "Stegosaurus", answer2: "Triceratops", answer3: "Dimetrodon", answer4: "Ankylosaurus"},

        {question: "How many claws did a Velociraptor have on each hand?",
        answer1: "Three", answer2: "One", answer3: "Four", answer4: "Two"},

        {question: 'What does "dinosaur" mean?',
        answer1: "Terrible Lizard", answer2: "Hungry Lizard", answer3: "Killer Lizard", answer4: "Evil Lizard"},

        {question: "At the beginning of the Triassic period, how many continents were there?",
        answer1: "One", answer2: "Three", answer3: "Seven", answer4: "Two"},

        {question: "How are the two groups of dinosaurs differentiated?",
        answer1: "Hip Bones", answer2: "Eating Habits", answer3: "Number of Claws", answer4: "Method of Reproduction"},

        {question: "How many fossils are necessary to identify a new dinosaur species?",
        answer1: "One", answer2: "Five", answer3: "Two", answer4: "Seven"},

        {question: "Who discovered the first fossilized dinosaur eggs?",
        answer1: "Jean-Jacques Poech", answer2: "Mary Anning", answer3: "Gideon Mantell", answer4: "Roy Chapman Andrews"},

        {question: "Which continents have dinosaur fossils been found on?",
        answer1: "All Seven Continents", answer2: "North America & South America", answer3: "Asia, Europe, & Africa", answer4: "Africa, North America, & Asia"},

        {question: "Where were the oldest dinosaur fossils in Canada found?",
        answer1: "Nova Scotia", answer2: "Yukon", answer3: "Saskatchewan", answer4: "Alberta"},

    ]; //trivia questions taken from: http://www.usefultrivia.com/miscellaneous_trivia/dinosaur_trivia_index.html

    var aArr =  ["answer1", "answer2", "answer3", "answer4"];
    var divArr;
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

    function startButton(text, where) {
        var btn = $("<button>");
        btn.addClass("btn btn-lg btn-success").html(text);
        $(where).append(btn);
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
        qArr = arrRandomize(qArr);
        for (i = 0; i < qArr.length; i++) {
            aArr = arrRandomize(aArr);
            var qDiv = $("<div>");
            qDiv.attr("id", "qDiv").attr("class", "panel panel-primary").append('<div class="question panel-heading"><h2>' + qArr[i].question + '</h2></div>');
            for (k = 0; k < aArr.length; k++) {
                qDiv.append('<div class="panel-body answer" ><h3>' + qArr[i][aArr[k]] + '</h3></div>');
            }
            divArr.push(qDiv);
        }
    }

    function startGame() {
        $("#qStart").remove();
        divArr = [];
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
        if (!timeActual) {
            userMissed++;
            qTransition();
        }
    }

    function qTransition() {
        clearInterval(intervalId);
        $(".progress-bar").css("width", "100%").removeClass('progress-bar-success').removeClass('progress-bar-warning').removeClass('progress-bar-danger').addClass('progress-bar-primary');
        userStats();
        if (qCount) {
            $("#stats").append('<div class="panel-body">Questions Remaining: <span class="statsVar">' + qCount + '</span></div>');
            setTimeout(qNext, 1000 * 3);
        }
        else {
            setTimeout(endGame, 1000 * 3);
        }
    }

    function userStats() {
        var correctReveal = '<div class="panel-body">Correct Answer:<br><span class="statsVar answerReveal">' + qArr[qCount].answer1 + '</span></div>';
        var statsDiv = $("<div>");
        statsDiv.attr("id", "stats").attr("class", "panel");
        if (correctState) {
            statsDiv.attr("class", "panel panel-success").append('<div class="panel-heading"><h2>Correct!<h2></div>');
        }
        else if (wrongState) {
            statsDiv.attr("class", "panel panel-danger").append('<div class="panel-heading"><h2>Wrong!<h2></div>').append(correctReveal);
        }
        else {
            statsDiv.attr("class", "panel panel-warning").append('<div class="panel-heading"><h2>Missed!</h2></div>').append(correctReveal);
        }
        $("#qDisplay").html(statsDiv).css("display", "none").fadeIn("fast");
    }

    function qNext() {
        clearInterval(intervalId);
        correctState = false;
        wrongState = false;
        qCount--;
        $(".progress-bar").removeClass('progress-bar-primary').addClass('progress-bar-success');
        $("#qDisplay").html(divArr[qCount]).css("display", "none").fadeIn("fast");
        timeActual = time;                 
        intervalId = setInterval(countDown, 1000);
    }

    function endGame() {
        $("#stats").empty().css("display", "none").removeClass("panel-success").removeClass("panel-danger").removeClass("panel-warning").addClass("panel-info")
            .append('<div class="panel-heading"><h2>Final Score:<h2></div>')
            .append('<div class="panel-body statsCorrect">Correct: <span class="statsVar">' + userCorrect + '</span></div>')
            .append('<div class="panel-body statsWrong">Wrong: <span class="statsVar">' + userWrong + '</span></div>')
            .append('<div class="panel-body statsMissed">Missed: <span class="statsVar">' + userMissed + '</span></div>');
        if (highScore < userCorrect) {
            highScore = userCorrect;
            var newHigh = true;
        }
        $("#stats").append('<div class="panel-body statsScore">High Score: <span class="statsVar">' + highScore + '</span></div>');
        if (newHigh) {
            $(".statsScore").prepend('NEW ');
            if (highScore == 10) {
                $(".statsScore").append(' <i class="fa fa-trophy" aria-hidden="true"></i>');
            }
        }
        startButton("REPLAY", "#stats");
        $("#stats").fadeIn("fast");
    }

    startButton("START", "#qStart");

    $(document).on("click", ".btn", function () {
        startGame();
    });

    $(document).on("click", ".answer", function () {
        if ($(this).text() == qArr[qCount].answer1) {
            correctState = true;
            userCorrect++;
        }
        else {
            wrongState = true;
            userWrong++; 
        }
        qTransition();
    });

});