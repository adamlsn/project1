// CLIENT ID: '10516420d1604321857930e912172451';
// SECRET: '7d4e3de30d5a4927ae3c109786767a8e';


// JAVASCRIPT FUNCTIONALITY OF DROPDOWN

let dropdown = document.querySelector('.dropdown');
            dropdown.addEventListener('click', function(event) {
                event.stopPropagation();
                dropdown.classList.toggle('is-active');
            })