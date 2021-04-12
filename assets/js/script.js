//***************************
//GLOBAL VARIABLES
//***************************
//cocktail
let spirit = "";
let drinkName= "";
let drinkId = "";

// Getting age of the user
    setTimeout(function(){
      $(".modal").addClass("is-active")
  },1000);
  $("#yes").on("click",function(){
     $(".modal").removeClass("is-active")
  })
  $("#no").on("click",function(){
      $(".text").html("Sorry you should be 21 to enter this page.");

  })
//trivia
var startTriviaBtn = document.getElementById("start") //initial screen start trivia game button
var triviaEl = document.getElementById("trivia"); //set var to trivia container
var introEl = document.getElementById("intro"); //set var to text field for displaying intro question
var answerTrue; //global var for true button
var answerFalse; //global var for false button
var questionsEl=document.getElementById("questions"); //set var to text field for displaying questions
var questionAmount; //for the amount of questions user wants in game
var triviaQuestion; //for setting the API array as var
var triviaAnswer; //for the correct answer provided from API
var triviaIndex = 0; //for the position in array
var answerFeedback = document.getElementById("answerFeedback"); //for setting the answerFeedback field as var to display feedback on users answer to question
var currentScore = document.getElementById("currentScore"); //for setting the text on the page for the current score
var apiResults; 
var score =0;
var questionArrayLength = 10; //var to pass through url on count of trivia questions
var timer =2;//timer for allowing feedback to be displayed for user to see correct vs incorrect response

console.log(triviaIndex)

//***************************
//START OF TRIVIA
//***************************
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

function countDown(){
    var timeInterval = setInterval(function() {
        if (timer>0){
            timer--
        }
        else if(timer===0){
            clearInterval(timeInterval);
            answerFeedback.innerHTML=''
            resultLoop();
        }
    },1000);            
}

function resultLoop(){
    console.log("trivia index: "+triviaIndex);
        console.log("question length: " +questionArrayLength);
    if(triviaIndex===questionArrayLength){
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
            //add 2 seconds delay for reading response then clear text and go to next question
            countDown();
            }
            else{
                answerFeedback.innerHTML="Incorrect";
                triviaIndex++;
                console.log(score);
                countDown();
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
            //add 2 seconds delay for reading response then clear text and go to next question
            countDown();
            }   
            else {
            answerFeedback.innerHTML="Incorrect";
            triviaIndex++;
            console.log(score);
            //add 2 seconds delay for reading response then clear text and go to next question
            countDown();
            }
        }
    }

   
   function gameResults(){
    falseBtn.innerHTML="I'm Done";
    trueBtn.innerHTML="Play Again"
    answerFeedback.innerHTML='';
    questionsEl.innerHTML = "Good effort! You answered all of the questions";
    //check local storage for a new high score
    if(localStorage.getItem("highScore")===null){
        localStorage.setItem("highScore", score)
        answerFeedback.innerHTML="Congratulations! You have set a new high score!"
    }
    else if(score>localStorage.getItem("highScore")){
        localStorage.setItem("highScore", score);
        answerFeedback.innerHTML = "Congratulations! You have set a new high score!"
    }
    else {
        answerFeedback.innerHTML = "You didn't set a new high score. Better luck next time!"
    }
    //function for user playing another round
    document.getElementById("trueBtn").onclick = function(){

    }
    //function for user being done playing game
    document.getElementById("falseBtn").onclick = function(){
        introEl.innerHTML='Are you ready for a challenge?'
        questionsEl.innerHTML='';
        answerFeedback.innerHTML=''
        currentScore.innerHTML=''
        trueBtn.parentNode.removeChild(trueBtn);
        falseBtn.parentNode.removeChild(falseBtn);
        var startTriviaBtn = document.createElement('button');
        startTriviaBtn.id = 'start';
        startTriviaBtn.textContent = "Start trivia";
        triviaEl.appendChild(startTriviaBtn);

    }
   }

startTriviaBtn.addEventListener("click", startTrivia);

//***************************
//COCKTAIL DB API
//***************************


//BUTTON CLICK LISTENERS
$("#bourbon").click(function(){
  spirit = "Bourbon";
  console.log("CHOSEN SPIRIT IS: " + spirit);
  generateCocktail(spirit);
  selectPlaylist(spirit);
});

$("#rum").click(function(){
  spirit = "Rum";
  console.log("CHOSEN SPIRIT IS: " + spirit);
  generateCocktail(spirit);
  selectPlaylist(spirit);
});

$("#vodka").click(function(){
  spirit = "Vodka";
  console.log("CHOSEN SPIRIT IS: " + spirit);
  generateCocktail(spirit);
  selectPlaylist(spirit);
});

$("#gin").click(function(){
  spirit = "Gin";
  console.log("CHOSEN SPIRIT IS: " + spirit);
  generateCocktail(spirit);
  selectPlaylist(spirit);
});

$("#tequila").click(function(){
  spirit = "Tequila";
  console.log("CHOSEN SPIRIT IS: " + spirit);
  generateCocktail(spirit);
  selectPlaylist(spirit);
});



//GENERATE COCKTAIL FUNCTION
function generateCocktail(spirit){
	fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + spirit)
  .then(
    //NONRESPONSE CONSOLE WARNING
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      //ACTUAL BODY OF FUNCTION
      response.json().then(function(data) {

        let drinkInteger = Math.floor(Math.random() * data.drinks.length);

        let drinkName = data.drinks[drinkInteger].strDrink;
        let drinkId = data.drinks[drinkInteger].idDrink;
        // console.log("DRINK NAME: " + drinkName);
        // console.log("DRINK ID: " + drinkId);
        appendCocktail(drinkId, drinkName);
        console.log("Drink name is: " + drinkName + " with ID of: " + drinkId);
        // return;
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

//PULL APPROPRIATE COCKTAIL PAGE AND APPEND TO BODY
function appendCocktail(drinkId){
	fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkId)
  .then(
    //NONRESPONSE CONSOLE WARNING
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      //ACTUAL BODY OF FUNCTION
      response.json().then(function(data) {
        console.log("Drink with ID of " + drinkId + " and name of " + drinkName + " were called by appendCocktail function")
        
        console.log(data);
        console.log(data.drinks[0].strDrink);

        let drinkSection = document.querySelector('#drink-section');
        
        document.getElementById('drink-section').innerHTML = "";

        let drinkInfo = document.createElement('h4');
        drinkInfo.innerHTML = data.drinks[0].strDrink;

        drinkSection.appendChild(drinkInfo);

        let img = document.createElement('img');
        img.src = data.drinks[0].strDrinkThumb;

        drinkSection.appendChild(img);

        for(let i=1; i<16; i++){
          console.log(i);
          
          // let quantity = "";
          let ingredient = document.createElement('li');
          ingredient.innerHTML = data.drinks[0][`strMeasure${i}`] + " " + data.drinks[0][`strIngredient${i}`];
      
          drinkSection.appendChild(ingredient);
          if(data.drinks[0][`strMeasure${i + 1}` ] === null) {
            return;
          }
        }
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

//***************************
//SPOTIFY
//***************************

function selectPlaylist(spirit) {
  let openingUrl = "https://open.spotify.com/embed/playlist/";
  let playlistUrl = ""
  if (spirit === "Bourbon") {
    playlistUrl = "37i9dQZF1DX3Fzl4v4w9Zp";
  };
  if (spirit === "Rum") {
    playlistUrl = "37i9dQZF1DX83I5je4W4rP";
  };
  if (spirit === "Vodka") {
    playlistUrl = "37i9dQZF1DWXRqgorJj26U";
  };
  if (spirit === "Gin") {
    playlistUrl = "37i9dQZF1DWV7EzJMK2FUI";
  };
  if (spirit === "Tequila") {
    playlistUrl = "37i9dQZF1DXa2PvUpywmrr";
  };
  document.getElementById("spotify-frame").src = openingUrl + playlistUrl;
}




