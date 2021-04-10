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
        console.log("Drink with ID of " + drinkId + " and name of " + drinkName + " were called by appendCocktail function");
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