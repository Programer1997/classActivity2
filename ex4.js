/*
Ice cream is one of the most versatile desserts on the planet because it can be done up so many different ways. Using logical operators, write a series of complex logical expressions that prints only if the following conditions are true:
if flavor is set to vanilla or chocolate and
if vessel is set to cone or bowl and
if toppings is set to sprinkles or peanuts
If the above conditions are true, then print out:
I'd like two scoops of __________ ice cream in a __________ with __________.
Fill in the blanks with the flavor of the ice cream, vessel, and toppings. For example,
I'd like two scoops of vanilla ice cream in a cone with peanuts. 
*/


// flavor  :  vanilla or chocolate
// vessel : cone or bowl 
// toppings :  sprinkles or peanuts

//"i'd like two scoops of " +        + "ice cream in a " +         +  " with " +            + "!"
function iceCream(flavor,vessel,toppings){

if (flavor == "vanilla" || flavor =="chocolate" ){
    if(vessel == "cone" || vessel == "bowl"){
        if(toppings == "sprinkles" || toppings == "peanuts"){

            return "I'd like two scoops of " + flavor  + " ice cream in a " + vessel +  " with " + toppings + "!"

        }

    }

    

}}

console.log(iceCream("vanilla", "bowl", "sprinkles"));