
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

var score = 0;
let randomOrder, currentQuestion = {};
let numb = 0;
let qNumber = 1
let queue = [];

$("#start").click(function(){
    $(".intro").hide()
    $(".quiz").show()
    numb = 0
    score = 0
    timer()
    questionOrder()
    displayQuestion()
}); 

$("#next").click(function(){
    if(numb < questions.length -1){
        numb++
        displayQuestion(numb);
    }else{
    console.log("there are no more questions")
    }
    
});

var questionOrder = function() {
    randomOrder = questions.sort(() => Math.random() - .5)
};


// function to display and generate question and option buttons 
var displayQuestion = ()=> {
    
    let quest ='<h3>'+ questions[numb].question +'</h3>';
    let opts = '<button class="optionButton">'+ questions[numb].options[0] +'</button>'
        + '<button class="optionButton">'+ questions[numb].options[1] +'</button>'
        + '<button class="optionButton">'+ questions[numb].options[2] +'</button>'
        + '<button class="optionButton">'+ questions[numb].options[3] +'</button>';
    
    $("#question").html(quest);
    $("#options").html(opts);

    const option = $(".optionButton");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
};

//  function to show correct answer upon selection and move to next quesrion not working ---------------------------
var optionSelected = (answer)=> {

    let selection = $("#options").click; //getting user selected option
    let correctSelection = questions[numb].answer; //getting correct answer from array
    
    const possibleOptions = $("#options").children.length; //getting all option items
    
    if(selection == correctSelection){ //if user selected option is equal to array's correct answer
        // userScore += 1; //upgrading score value with 1
        //adding green background to correct selected option
        console.log("Correct Answer");
        // console.log("Your correct answers = " + userScore);
    }else{
         //adding red background to correct selected option
        console.log("Wrong Answer");
        // for(i=0; i < possibleOptions; i++){
        //     if($("#options").children[i].html == correctSelection){ //if there is an option which is matched to an array answer 
        //     console.log("Auto selected correct answer.");
        //     }
        // }
    }
}

// function for timer
var timer = function(){
    var sec = 60;
    var timer = setInterval(function(){
        $('#timeLeft').html('00:'+sec);
        sec--;
        if (sec <= 0) {
            $('#timeLeft').html('No Time Left');
        }
    }, 1000)};
