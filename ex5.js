/*
Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"
Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.
For example, if...
const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)
Then print L to the console. 
If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...
var shirtWidth = 18; // size S (small)
var shirtLength = 29; // size M (medium)
var shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.
*/
function sizes(shirtWidth,shirtLength,shirtSleeve){


if (shirtWidth <20 && shirtLength < 29  && shirtSleeve <8.38){
    return "S"
} else if (shirtWidth >=20 && shirtLength >= 29  && shirtSleeve >=8.38 && shirtWidth <22 && shirtLength < 30  && shirtSleeve <8.63){
   return "M"
} 
if (shirtWidth >=22 && shirtLength >= 30  && shirtSleeve >=8.63 && shirtWidth <24 && shirtLength < 31  && shirtSleeve <8.88){
    return "L"
 } else if (shirtWidth >=24 && shirtLength >= 31  && shirtSleeve >=8.88 && shirtWidth <26 && shirtLength < 33  && shirtSleeve <9.63){
    return "XL"
 } else if (shirtWidth >=26 && shirtLength >= 33  && shirtSleeve >=9.63 && shirtWidth <28 && shirtLength < 34  && shirtSleeve <10.13){
    return "2XL"
 } else if (shirtWidth >=28 && shirtLength >= 34  && shirtSleeve >=10.13 ){
    return "3XL"
 } else {
    return "N/A"
}

}

console.log(sizes(18,28,8.13));
console.log(sizes(20,29,8.38));
console.log(sizes(22,30,8.63));
console.log(sizes(24,31,8.88));
console.log(sizes(26,33,9.63));
console.log(sizes(28,34,10.13));