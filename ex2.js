/*
Write a series of conditional statements that:
- Prints "not a group" if musicians is less than or equal to 0
- Prints "solo" if musicians is equal to 1
- Prints "duet" if musicians is equal to 2
- Prints "trio" if musicians is equal to 3
- Prints "quartet" if musicians is equal to 4
- Prints "this is a large group" if musicians is greater than 4
*/




function conditional (musicians){
if (musicians== 0){
return "not a group"
}
if (musicians== 1){
    return "solo"
    }if (musicians== 2){
        return "duet"
        }if (musicians== 3){
            return "trio"
            }if (musicians== 4){
                return "quartet"
                }if (musicians>= 5){
                    return "this is a large group"
                    }

}

console.log(conditional(0));
console.log(conditional(1));
console.log(conditional(2));
console.log(conditional(3));
console.log(conditional(4));
console.log(conditional(50));