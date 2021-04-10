// CLIENT ID: '10516420d1604321857930e912172451';
// SECRET: '7d4e3de30d5a4927ae3c109786767a8e';
//***************************
//GLOBAL VARIABLES
//***************************
let sprit = "";
let drinkName= "";
let drinkId = "";

//***************************
//COCKTAIL DB API
//***************************


//BUTTON CLICK LISTENERS
$("#bourbon").click(function(){
  sprit = "Bourbon";
  console.log("CHOSEN SPRIT IS: " + sprit);
  generateCoctail(sprit);
});

$("#rum").click(function(){
  sprit = "Rum";
  console.log("CHOSEN SPRIT IS: " + sprit);
  generateCoctail(sprit);
});

$("#vodka").click(function(){
  sprit = "Vodka";
  console.log("CHOSEN SPRIT IS: " + sprit);
  generateCoctail(sprit);
});

$("#gin").click(function(){
  sprit = "Gin";
  console.log("CHOSEN SPRIT IS: " + sprit);
  generateCoctail(sprit);
});

$("#tequila").click(function(){
  sprit = "Tequila";
  console.log("CHOSEN SPRIT IS: " + sprit);
  generateCoctail(sprit);
});

//GENERATE COCKTAIL FUNCTION
function generateCoctail(sprit){
	fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + sprit)
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
        console.log(" Drink with ID of " + drinkId + " and name of " + drinkName + " were called by appendCocktail function ")
        
        console.log(data);
        console.log(data.drinks[0].strDrink);

        let drinkSection = document.querySelector('#drink-section');

        let drinkInfo = document.createElement('h4');
        drinkInfo.innerHTML = data.drinks[0].strDrink;

        drinkSection.appendChild(drinkInfo);

        let img = document.createElement('img');
        img.src = data.drinks[0].strDrinkThumb;

        drinkSection.appendChild(img);

        for(let i=1; i<16; i++){
          console.log(i);
      
          let ingredient = document.createElement('ons-list-item');
          ingredient.innerHTML = data.drinks[0][`strIngredient${i}`];
      
          drinkSection.appendChild(ingredient);
        }
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
