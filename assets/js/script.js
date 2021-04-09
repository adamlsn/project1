// CLIENT ID: '10516420d1604321857930e912172451';
// SECRET: '7d4e3de30d5a4927ae3c109786767a8e';

//***************************
//COCKTAIL DB API
//***************************
let sprit = "";

//BUTTON CLICK LISTENERS
$("#bourbon").click(function(){
  sprit = "Bourbon";
  console.log("CHOSEN SPRIT IS: " + sprit);
  generateCoctail();
});

$("#rum").click(function(){
  sprit = "Rum";
  console.log("CHOSEN SPRIT IS: " + sprit);
  generateCoctail();
});

$("#vodka").click(function(){
  sprit = "Vodka";
  console.log("CHOSEN SPRIT IS: " + sprit);
  generateCoctail();
});

$("#gin").click(function(){
  sprit = "Gin";
  console.log("CHOSEN SPRIT IS: " + sprit);
  generateCoctail();
});

$("#tequila").click(function(){
  sprit = "Tequila";
  console.log("CHOSEN SPRIT IS: " + sprit);
  generateCoctail();
});

//GENERATE COCKTAIL FUNCTION
function generateCoctail(){
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
        console.log("DRINK NAME: " + drinkName);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}