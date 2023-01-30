/*
From the smallest of creatures to the largest of animals, inevitably every living, breathing thing must ingest other organisms to survive. This means that all animals will fall within one of the three consumer-based categories based on the types of food that they eat.
Animals that eat only plants are called herbivores
Animals that eat only other animals are called carnivores
Animals that eat both plants and animals are called omnivores
Directions:
Write a series of ternary statements that sets the variable category equal to:
"herbivore" if an animal eats plants
"carnivore" if an animal eats animals
"omnivore" if an animal eats plants and animals
"undefined" if an animal doesn't eat plants or animals
Use the eatsPlants and eatsAnimals variables to test your code.
If eatsPlants equals true and eatsAnimals equals false, then herbivore should be printed to the console. 
*/
//Program type 1
var eatsPlants = false;
var eatsAnimals = true;

var category = (eatsPlants) ? (eatsAnimals) ? "omnivore" : "herbivore" : eatsAnimals ? "carnivore" : undefined;


console.log(category);


//Program type 2
function classOfAnimals(herbivores,carnivores){

if (herbivores == true && carnivores ==false){
    return "Hervibore"
}else if (herbivores == false && carnivores ==true){
    return "Carnivore"
}else if (herbivores == true && carnivores ==true){
    return "\nOmnivoro"
}

    

}

console.log(classOfAnimals(true,true)); //omnivoro
console.log(classOfAnimals(false,true)); //carnivore
console.log(classOfAnimals(true,false)); //hervibore
console.log(classOfAnimals());
