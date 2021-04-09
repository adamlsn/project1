




// Gettin age of the user
setTimeout(function(){
    $(".modal").show();
},1000);
$("#yes").on("click",function(){
   $(".modal").hide();
})
$("#no").on("click",function(){
    $("p").html("You should be 21!");
})
// JAVASCRIPT FUNCTIONALITY OF DROPDOWN

let dropdown = document.querySelector('.dropdown');
            dropdown.addEventListener('click', function(event) {
                event.stopPropagation();
                dropdown.classList.toggle('is-active');
            });






