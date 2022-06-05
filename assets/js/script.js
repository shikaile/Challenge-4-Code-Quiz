//GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

const questionElement = $("#question");
const optionButtons = $("#options")
var score = 0;
let randomOrder, currentQuestion;
let count = 0


var timer = function(){
    var sec = 60;
    var timer = setInterval(function(){
        $('#timeLeft').html('00:'+sec);
        sec--;
        if (sec <= 0) {
            $('#timeLeft').html('No Time Left');
        }
    }, 1000)};

        //hides intro, displays quiz, starts timer
   
$("#start").click(function(){
    $(".intro").hide();
    $(".quiz").show();
    randomOrder = questions.sort(() => Math.random() - .5)
    currentQuestion = 0;
    timer();
    questionFlow(0);
});

var questionFlow = function() {
    displayQuestion(randomOrder[currentQuestion])
};

var displayQuestion =  function(index){
    const que = $("#question");
    // const option = option_list.querySelectorAll(".option");

    let quest = '<h3>'+ questions[0].question +'</h3>';
    let opts = '<button class="btn">'+ questions[0].options[0] +'</button>'
    + '<button class="btn">'+ questions[0].options[1] +'</button>'
    + '<button class="btn">'+ questions[0].options[2] +'</button>'
    + '<button class="btn">'+ questions[0].options[3] +'</button>';
    
    $(que).append(quest);
    $(optionButtons).append(opts);

    const option = optionButtons.querySelectorAll(".btn");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}


    



