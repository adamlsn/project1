// JAVASCRIPT FUNCTIONALITY OF DROPDOWN

let dropdown = document.querySelector('.dropdown');
dropdown.addEventListener('click', function (event) {
    event.stopPropagation();
    dropdown.classList.toggle('is-active');
});


// START OF TRIVIA
var startTriviaBtn = document.getElementById("start") //initial screen start trivia game button
var triviaEl = document.getElementById("trivia"); //set var to trivia container
var introEl = document.getElementById("intro"); //set var to text field for displaying intro question
var answerTrue; //global var for true button
var answerFalse; //global var for false button
var questionsEl=document.getElementById("questions"); //set var to text field for displaying questions
var questionAmount; //for the amount of questions user wants in game
var triviaQuestion; //for setting the API array as var
var triviaAnswer; //for the correct answer provided from API
var triviaIndex=0; //for the position in array
var answerFeedback = document.getElementById("answerFeedback"); //for setting the answerFeedback field as var to display feedback on users answer to question
var currentScore = document.getElementById("currentScore"); //for setting the text on the page for the current score
var apiResults; 
var score =0;
var questionArrayLength = 10;

function startTrivia() {
    //remove start trivia button
    startTriviaBtn.parentNode.removeChild(startTriviaBtn);
    introEl.innerHTML='';

    //add question   
    triviaAPI();
        
    //add true button    
    var answerTrue = document.createElement('button');
    answerTrue.id = 'trueBtn';
    answerTrue.textContent = "True";
    triviaEl.appendChild(answerTrue);
    //add false button
    var answerFalse = document.createElement('button');
    answerFalse.id = 'falseBtn';
    answerFalse.textContent = "False";
    triviaEl.appendChild(answerFalse);

    checkAnswer();
};

//trivia API fetch and store 
function triviaAPI(){
    fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean").then(function (response) {
    console.log(response);
    return response.json();
    })
    .then(function(response){
        console.log(response.results[triviaIndex])
        console.log(response.results);
        apiResults=response.results;
        console.log(triviaAnswer)
        resultLoop();
    });
}

function resultLoop(){
    if(triviaIndex>questionArrayLength){
        gameResults();
    }else{
    triviaAnswer=apiResults[triviaIndex].correct_answer;
    triviaQuestion=apiResults[triviaIndex].question;
    questionsEl.innerHTML=triviaQuestion
    }
}

function checkAnswer(){
    document.getElementById("trueBtn").onclick = function() {
        console.log("True button clicked");
        if(triviaAnswer==="True"){
            score += 10;
            currentScore.innerHTML="Current Score: " + score;
            answerFeedback.innerHTML="That's Correct!"
            triviaIndex++;
            console.log(score);
            //add 2 seconds delay for reading response then clear text
            resultLoop();
            }
            else{
                answerFeedback.innerHTML="Incorrect";
                triviaIndex++;
                console.log(score);
                //add 2 seconds delay for reading response then clear text
                resultLoop();
            }
        }
    document.getElementById("falseBtn").onclick = function() {
        console.log("False button clicked");
        if(triviaAnswer==="False"){
            score += 10;
            currentScore.innerHTML="Current Score: " + score;
            answerFeedback.innerHTML="That's Correct!"
            triviaIndex++;
            console.log(score);
            //add 2 seconds delay for reading response then clear text
            resultLoop();
            }   
            else {
            answerFeedback.innerHTML="Incorrect";
            triviaIndex++;
            console.log(score);
            //add 2 seconds delay for reading response then clear text
            resultLoop();
            }
        }
    }

   function gameResults(){

   }


startTriviaBtn.addEventListener("click", startTrivia);
