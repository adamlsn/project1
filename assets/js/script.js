

setTimeout(function(){
    $(".modal").show();
},1000);


// Gettin age of the user
$(".submit-btn").on("click",function(){
    const today = moment().format("MMMM D YYYY");
    console.log(today);
    const ageMonth = $("#month").val();
    const ageDay = $("#day").val();
    const ageYear = $("#year").val();
})
// JAVASCRIPT FUNCTIONALITY OF DROPDOWN

let dropdown = document.querySelector('.dropdown');
            dropdown.addEventListener('click', function(event) {
                event.stopPropagation();
                dropdown.classList.toggle('is-active');
            });






