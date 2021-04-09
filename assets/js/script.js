// CLIENT ID: '10516420d1604321857930e912172451';
// SECRET: '7d4e3de30d5a4927ae3c109786767a8e';
<<<<<<< HEAD


// JAVASCRIPT FUNCTIONALITY OF DROPDOWN

let dropdown = document.querySelector('.dropdown');
            dropdown.addEventListener('click', function(event) {
                event.stopPropagation();
                dropdown.classList.toggle('is-active');
            })

// JAVASCRIPT FUNCTIONALITY OF COCKTAIL API

function getCocktailName () {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Rum')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      response.json().then(function(data) {
        console.log(data);
        displayCocktailName(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

}

getCocktailName ();

function displayCocktailName(cocktail){
    console.log(cocktail.drinks[0]);

    let drinkSection = document.querySelector('#drink-section');

    let drinkName = document.createElement('h2');
    drinkName.innerHTML = cocktail.drinks[0].strDrink;

    drinkSection.appendChild(drinkName);

    let img = document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;

    drinkSection.appendChild(img);

    for(let i=1; i<16; i++){
       console.log(i); 

      let ingredient = document.createElement('ons-list-item');
      ingredient.innerHTML = cocktail.drinks[0] ['strIngredient${i}'];

      drinkSection.appendChild(ingredient);
    }


}
=======
>>>>>>> feature/styling
