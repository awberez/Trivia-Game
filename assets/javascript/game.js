$(function(){
    
    var qArr = [
        {question: 'What dinosaur name means "fast thief?"',
           answer: ["Velociraptor", "Pteronodon", "Nanotyrannus", "Sinocalliopteryx"]},
        {question: "What dinosaur was, for many years, mistakenly called a Brontosaurus?",
           answer: ["Apatosaurus", "Rigidosaurus", "Brachiosaurus", "Arcanosaurus"]},
        {question: "Which dinosaur had fifteen horns?",
           answer: ["Kosmoceratops", "Pachyrhinosaurus", "Stryacosaurus", "Diabloceratops"]},
        {question: "Which of the following dinosaurs was toothless?",
           answer: ["Oviraptor", "Diplodocus", "Compsognathus", "Apatosaurus"]},
        {question: "What close relative of the Velociraptor could grow up to 7 meters (20 feet) long and weighed almost a ton?",
           answer: ["Utahraptor", "Nevadaraptor", "Ohioraptor", "Texasraptor"]},
        {question: "What was the first dinosaur to be discovered?",
           answer: ["Megalosaurus", "Brontosaurus", "Tyrannosaurus Rex", "Giganotosaurus"]},
        {question: "What dinosaur is believed to have weighed up to 110 tons?",
           answer: ["Argentinosaurus", "Perusaurus", "Columbiosaurus", "Brazilosaurus"]},
        {question: "During what geologic period did dinosaurs first appear?",
           answer: ["Triassic", "Cretaceous", "Cambrian", "Jurassic"]},
        {question: "Which of these dinosaurs was a meat eater?",
           answer: ["Dromaeosaurus", "Stegosaurus","Triceratops", "Angulomastacator"]},
        {question: "What is the nickname of the most complete T-rex specimen ever discovered?",
           answer: ["Sue", "May", "Eve", "Ann"]},
        {question: "Which extinction event wiped out the dinosaurs?",
           answer: ["Cretaceous-Paleogene", "Ordovician-Silurian", "Permian", "Triassic-Jurassic"]},
        {question: "What is the official state dinosaur of Colorado?",
           answer: ["Stegosaurus", "Allosaurus", "Triceratops", "Velociraptor"]},
        {question: "What was the first non-carnivorous theropod fossil to be discovered?",
           answer: ["Therizinosaur", "Baronyx", "Deinonychus", "Tarbosaurus"]},
        {question: "In what country were dinosaur fossils thought to be dragon bones?",
           answer: ["China", "South Africa", "Brazil", "Saudi Arabia"]},
        {question: "How many wings did a Microraptor have?",
           answer: ["Four", "Two", "Six", "Three"]},
        {question: "Which of the following dinosaurs was the smallest?",
           answer: ["Compsognathus", "Raptor", "Troodon", "Dilophosaurus"]},
        {question: "What dinosaur fossil was originally mistaken for a type of bison?",
           answer: ["Triceratops", "Buffalosaurus", "Allosaurus", "Stegosaurus"]},
        {question: "What were the direct ancestors of the dinosaurs?",
           answer: ["Archosaurs", "Eukaryotes", "Sapheosaurs", "Silesaurs"]},
        {question: "What was the lifespan of a T. rex?",
           answer: ["20-30 years", "100-120 years", "10-15 years", "50-60 years"]},
        {question: "Which dinosaur had the smallest brain for its body size?",
           answer: ["Stegosaurus", "Tyrannosaurus rex", "Triceratops", "Brachiosaurus"]},
        {question: "The meteor that many scientists believe killed the dinosaurs struck in what modern-day country?",
           answer: ["Mexico", "Australia", "United States", "South Africa"]},
        {question: 'What dinosaur name means "covered lizard?"',
           answer: ["Stegosaurus", "Triceratops", "Dimetrodon", "Ankylosaurus"]},
        {question: "How many claws did a Velociraptor have on each hand?",
           answer: ["Three", "One", "Four", "Two"]},
        {question: 'What does "dinosaur" mean?',
           answer: ["Terrible Lizard", "Hungry Lizard", "Killer Lizard", "Evil Lizard"]},
        {question: "At the beginning of the Triassic period, how many continents were there?",
           answer: ["One", "Three", "Seven", "Two"]},
        {question: "How are the two groups of dinosaurs differentiated?",
           answer: ["Hip Bones", "Eating Habits", "Number of Claws", "Method of Reproduction"]},
        {question: "How many fossils are necessary to identify a new dinosaur species?",
           answer: ["One", "Five", "Two", "Seven"]},
        {question: "Who discovered the first fossilized dinosaur eggs?",
           answer: ["Jean-Jacques Poech", "Mary Anning", "Gideon Mantell", "Roy Chapman Andrews"]},
        {question: "Which continents have dinosaur fossils been found on?",
           answer: ["All Seven Continents", "North America & South America", "Asia, Europe, & Africa", "Africa, North America, & Asia"]},
        {question: "Where were the oldest dinosaur fossils in Canada found?",
           answer: ["Nova Scotia", "Yukon", "Saskatchewan", "Alberta"]},
    ], //trivia questions taken from: http://www.usefultrivia.com/miscellaneous_trivia/dinosaur_trivia_index.html

    aArr = [0, 1, 2, 3], highScore = 0, time = 30, timeActual, timeInterval, qCount, correctState, wrongState, userCorrect, userWrong, userMissed;
    
    function startButton(text, where) {
        let btn = $("<button>");
        btn.addClass("btn btn-lg btn-success").html(text);
        $(where).append(btn);
    }

    function arrRandomize(arr) {
        let n = arr.length - 1, tempArr = [];
        for (let i = 0; i < n; i++) {
            tempArr.push(arr.splice(~~(Math.random()*arr.length),1)[0]);
        }
        tempArr.push(arr[0]);
        return tempArr;
    }

    function qCreate(q) {
        aArr = arrRandomize(aArr);
        let qDiv = $("<div>");
        qDiv.attr("id", "qDiv").addClass("panel panel-primary").append(`<div class="question panel-heading"><h2>${qArr[q].question}</h2></div>`);
        for (let index of aArr) {
            qDiv.append(`<div class="panel-body answer"><h3>${qArr[q].answer[index]}</h3></div>`);
        }
        return qDiv;
    }

    function qDisplay() {
        correctState = false, wrongState = false, timeActual = time, timeInterval = setInterval(countDown, 1e3);
        $(".progress-bar").removeClass("progress-bar-primary").addClass("progress-bar-success");
        $("#qDisplay").html(qCreate(qCount)).css("display", "none").fadeIn("fast");
        location.href = "#trivia-time";
    }

    function countDown() {
        timeActual--;
        let percent = timeActual / time * 100;
        $(".progress-bar").css("width", `${percent}%`);
        if (percent <= 33.34) {
            $(".progress-bar").removeClass("progress-bar-warning").addClass("progress-bar-danger");
        }
        else if (percent <= 66.67) {
            $(".progress-bar").removeClass("progress-bar-success").addClass("progress-bar-warning");
        }
        if (!timeActual) {
            userMissed++;
            qTransition();
        }
    }

    function qTransition() {
        clearInterval(timeInterval);
        $(".progress-bar").css("width", "100%").attr("class", "progress-bar progress-bar-primary");
        userStats();
        qCount ? ($("#stats").append(`<div class="panel-body">Questions Remaining: <span class="statsVar">${qCount}</span></div>`), qCount--, setTimeout(qDisplay, 1e3 * 3)) : setTimeout(endGame, 1e3 * 3);
    }

    function userStats() {
        let statsDiv = $("<div>"), correctReveal = `<div class="panel-body">Correct Answer:<br><span class="statsVar answerReveal">${qArr[qCount].answer[0]}</span></div>`;
        statsDiv.attr("id", "stats");
        correctState 
            ? statsDiv.addClass("panel panel-success").append(`<div class="panel-heading"><h2>Correct!<h2></div>`)
            : wrongState 
                ? statsDiv.addClass("panel panel-danger").append(`<div class="panel-heading"><h2>Wrong!<h2></div>`).append(correctReveal)
                : statsDiv.addClass("panel panel-warning").append(`<div class="panel-heading"><h2>Missed!</h2></div>`).append(correctReveal);
        $("#qDisplay").html(statsDiv).css("display", "none").fadeIn("fast");
    }

    function endGame() {
        $("#stats").empty().css("display", "none").attr("class", "panel panel-info").append(`<div class="panel-heading"><h2>Final Score:<h2></div>`)
            .append(`<div class="panel-body statsCorrect">Correct: <span class="statsVar">${userCorrect}</span></div>`)
            .append(`<div class="panel-body statsWrong">Wrong: <span class="statsVar">${userWrong}</span></div>`)
            .append(`<div class="panel-body statsMissed">Missed: <span class="statsVar">${userMissed}</span></div>`);
        if (highScore < userCorrect) {
            highScore = userCorrect;
            var newHigh = true;
        }
        $("#stats").append(`<div class="panel-body statsScore">High Score: <span class="statsVar">${highScore}</span></div>`);
        if (newHigh) {
            $(".statsScore").prepend(`NEW `);
            if (highScore == 10) {
                $(".statsScore").append(` <i class="fa fa-trophy" aria-hidden="true"></i>`);
            }
        }
        startButton("REPLAY", "#stats");
        $("#stats").fadeIn("fast");
    }

    startButton("START", "#qStart");

    $(document).on("click", ".btn", function () {
        $("#qStart").remove();
        qCount = 9, userCorrect = 0, userWrong = 0, userMissed = 0, qArr = arrRandomize(qArr);
        qDisplay();
    });

    $(document).on("click", ".answer", function () {
        $(this).text() == qArr[qCount].answer[0] ? (correctState = true, userCorrect++) : (wrongState = true, userWrong++);
        qTransition();
    });

});