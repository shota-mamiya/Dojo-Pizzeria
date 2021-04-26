function pizzaOven(crustType, sauceType, cheeses, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;

}

var pizza1 = pizzaOven("deep dish" , "traditional" , ["mozzarella"] , ["pepperoni" , "sausage"]); 
var pizza2 = pizzaOven("hand tossed" , "marinara" , ["mozzarella" , "feta"] , ["mushrooms" , "olives" , "onions"]);
var pizza3 = pizzaOven("thin crust" , "marinara" , ["mozzarella" , "barbeque"] , ["sausage" , "onions" , "bacon bits"]); 
var pizza4 = pizzaOven("deep dish" , "marinara" , ["mozzarella" , "pepperjack"] , ["olives" , "onions" , "spinach"]);      
console.log(pizza3);                 