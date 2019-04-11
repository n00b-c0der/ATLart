var searchFood = $('#meal_text').text().trim();

//console.log("ttt");
// Might want to use this wiht typeOf var stringValue = "";


    $("#run-search").on("click", function(event) {

        console.log(searchFood);

        /*This line 18 allows us to take advantage of the HTML "submit" property
        This way we can hit enter on the keyboard and it registers the search
        (in addition to clicks). Prevents the page from reloading on form submit.*/

        event.preventDefault();




});