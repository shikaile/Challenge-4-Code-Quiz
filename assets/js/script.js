
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

const questionElement = $("#question");
const optionButtons = $("#options");
const choices = Array.optionButtons;
const questionLimit = 10;


var score = 0;
let randomOrder, currentQuestion = {};
let count = 0;
let queue = [];

$("#start").click(function(){
    $(".intro").hide()
    $(".quiz").show()
    count = 0
    score = 0
    timer()
    randomOrder = questions.sort(() => Math.random() - .5)
    queue = [questionOrder(questions,questionLimit)]
    questionOrder()

}); 

var timer = function(){
    var sec = 60;
    var timer = setInterval(function(){
        $('#timeLeft').html('00:'+sec);
        sec--;
        if (sec <= 0) {
            $('#timeLeft').html('No Time Left');
        }
    }, 1000)};

var questionOrder = function() {
    displayQuestion(randomOrder[currentQuestion])
};

// variable function not working ---------------------------
// var questionFlow = function(){
//     if (queue.length === 0 || count >= questionLimit) {
//         console.log('no more questions');
//     }
//     count++;
    
//     const questionList = Math.floor(Math.random() * queue.length);
//     currentQuestion = quene[questionList];
//     $(questionElement).append(currentQuestion.question);

//     optionButtons.array.forEach(options => {
        
//         $(optionButtons).append
//     });
// };

var displayQuestion =  function(index){
    
    let quest = '<h3>'+ questions[0].question +'</h3>';
    let opts = '<button class="btn">'+ questions[0].options[0] +'</button>'
    + '<button class="btn">'+ questions[0].options[1] +'</button>'
    + '<button class="btn">'+ questions[0].options[2] +'</button>'
    + '<button class="btn">'+ questions[0].options[3] +'</button>';
    
    $(questionElement).append(quest);
    $(optionButtons).append(opts);

    const option = optionButtons.querySelectorAll(".btn");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
};

// variable function not working ---------------------------
// var optionSelected = function(answer){

//     let selection = answer.textContent; //getting user selected option
//     let correctSelection = questions[count].answer; //getting correct answer from array
//     const possibleOptions = optionButtons.children.length; //getting all option items
    
//     if(selection == correctSelection){ //if user selected option is equal to array's correct answer
//         userScore += 1; //upgrading score value with 1
//         //adding green background to correct selected option
//         console.log("Correct Answer");
//         console.log("Your correct answers = " + userScore);
//     }else{
//          //adding red background to correct selected option
//         console.log("Wrong Answer");
//         for(i=0; i < possibleOptions; i++){
//             if(optionButtons.children[i].textContent == correctSelection){ //if there is an option which is matched to an array answer 
//             console.log("Auto selected correct answer.");
//             }
//         }
//     }
//     for(i=0; i < possibleOptions; i++){
//         if (optionButtons.children[i].textContent == correctSelection){
//             console.log("answer has been given")
//         }; //once user select an option then disabled all options
//     }
// // add function call to go to next question
// }

//     for(i=0; i < possibleOptions; i++){
//         optionButtons.children[i].classList.add("disabled"); //once user select an option then disabled all options
// };


// event liostener for all choices not working ---------------------------

// choices.forEach(choice => {
// $(choices).on("click", function(userchoice) {
    
//     currentQuestion++
//     questionOrder()
// })
// });

// variable function to highligh background of correct and incorrect answer not working ---------------------------

// var showAnswer = function(){
//     console.log('the answer is');
// }



    



