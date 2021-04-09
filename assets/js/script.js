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
var questionAmount //for the amount of questions user wants in game
var triviaAnswer //for the correct answer provided from API

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
};

//trivia API fetch and store 
function triviaAPI(){
    fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean").then(function (response) {
    console.log(response);
    return response.json();
    })
    .then(function(response){
        console.log(response.results[0])
        questionsEl.innerHTML=response.results[0].question;
        triviaAnswer = response.results[0].correct_answer;
        console.log(triviaAnswer)
    });
}


startTriviaBtn.addEventListener("click", startTrivia);
