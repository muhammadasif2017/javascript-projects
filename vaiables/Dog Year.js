/*
Dogs mature at a faster rate than human beings. We often say a dog’s age can be calculated in “dog years” to account for their growth compared to a human of the same age. In some ways we could say, time moves quickly for dogs — 8 years in a human’s life equates to 45 years in a dog’s life. How old would you be if you were a dog?
Here’s how you convert your age from “human years” to “dog years”:
The first two years of a dog’s life count as 10.5 dog years each.
Each year following equates to 4 dog years.
*/
// age of the perosn 
const myAge = 30;
// variable to stoer the early Years value
let earlyYears = 2;
earlyYears *= 10.5;

// later year stores the value minus the ealyYears intialization value 
let laterYears = myAge - 2;
// Multiplication assignement
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

// added the earlyYear age with later year age to 
// calculate the age in dog year
const myAgeInDogYears = earlyYears + laterYears;

// lowercase the name 
const myName = "Muhammad Asif".toLowerCase();

// printing the message on console
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)