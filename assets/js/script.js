// CLIENT ID: '10516420d1604321857930e912172451';
// SECRET: '7d4e3de30d5a4927ae3c109786767a8e';
//***************************
//GLOBAL VARIABLES
//***************************
let spirit = "";
let drinkName= "";
let drinkId = "";

//***************************
//COCKTAIL DB API
//***************************


//BUTTON CLICK LISTENERS
$("#bourbon").click(function(){
  spirit = "Bourbon";
  console.log("CHOSEN SPIRIT IS: " + spirit);
  generateCocktail(spirit);
});

$("#rum").click(function(){
  spirit = "Rum";
  console.log("CHOSEN SPIRIT IS: " + spirit);
  generateCocktail(spirit);
});

$("#vodka").click(function(){
  spirit = "Vodka";
  console.log("CHOSEN SPIRIT IS: " + spirit);
  generateCocktail(spirit);
});

$("#gin").click(function(){
  spirit = "Gin";
  console.log("CHOSEN SPIRIT IS: " + spirit);
  generateCocktail(spirit);
});

$("#tequila").click(function(){
  spirit = "Tequila";
  console.log("CHOSEN SPIRIT IS: " + spirit);
  generateCocktail(spirit);
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
        console.log("DRINK NAME: " + drinkName);
        console.log("DRINK ID: " + drinkId);
        appendCocktail(drinkId, drinkName);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

//PULL APPROPRIATE COCKTAIL PAGE AND APPEND TO BODY
function appendCocktail(drinkId, drinkName){
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
        drinkInfo.classList.add("py-1");
        drinkInfo.classList.add("is-size-4");
        drinkInfo.innerHTML = data.drinks[0].strDrink;

        drinkSection.appendChild(drinkInfo);

        let img = document.createElement('img');
        img.src = data.drinks[0].strDrinkThumb;
        img.classList.add("py-2")

        drinkSection.appendChild(img);

        for(let i=1; i<16; i++){
          let ingredient = document.createElement('li');
          ingredient.innerHTML = data.drinks[0][`strMeasure${i}`] + " " + data.drinks[0][`strIngredient${i}`];
      
          drinkSection.appendChild(ingredient);
          if(data.drinks[0][`strMeasure${i + 1}` ] === null) {
            let description = document.createElement("p");
            description.innerHTML = data.drinks[0].strInstructions;
            description.classList.add("pt-3");
            drinkSection.appendChild(description);
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



