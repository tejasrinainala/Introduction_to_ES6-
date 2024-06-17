/*
    ** includes() Challenge
        * You want to make a chocolate cake
        * And you have a list of ingredients represented with an array
        * Using the JavaScript includes() function
        * Check if you have the ingredient chocolate in your list of ingredients, and print into the console "We are going to make a chocolate cake" if you have it
        * Else print into the console "We can't make a chocolate cake because we are missing the ingredient chocolate"
*/

const listIngredients =  [ "flour", "sugar", "eggs", "butter" ];
const cake = listIngredients.includes("chocolates") ? "We are going to make a chocolate cake" : 
"We can't make a chocolate cake because we are missing the ingredient chocolate"
console.log(cake)




//output
We can't make a chocolate cake because we are missing the ingredient chocolate
