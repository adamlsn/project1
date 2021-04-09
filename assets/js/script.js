// CLIENT ID: '10516420d1604321857930e912172451';
// SECRET: '7d4e3de30d5a4927ae3c109786767a8e';

//GENERATE COCKTAIL FUNCTION
let sprit = "";

//BUTTON CLICK LISTENERS
$("#bourbon").click(function(){
  sprit = "Bourbon";
  console.log(sprit);
  generateCoctail();
});

$("#rum").click(function(){
  sprit = "Rum";
  console.log(sprit);
  generateCoctail();
});

$("#vodka").click(function(){
  sprit = "Vodka";
  console.log(sprit);
  generateCoctail();
});

$("#gin").click(function(){
  sprit = "Gin";
  console.log(sprit);
  generateCoctail();
});

$("#tequila").click(function(){
  sprit = "Tequila";
  console.log(sprit);
  generateCoctail();
});


function generateCoctail(){
	fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + sprit)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}