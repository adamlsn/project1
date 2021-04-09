// JAVASCRIPT FUNCTIONALITY OF DROPDOWN

let dropdown = document.querySelector('.dropdown');
            dropdown.addEventListener('click', function(event) {
                event.stopPropagation();
                dropdown.classList.toggle('is-active');
            });

// Gettin age of the user
const today = moment().format("DD,MMMM,YYYY");
console.log(today);


