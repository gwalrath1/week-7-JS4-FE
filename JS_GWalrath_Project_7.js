console.log("// ----------QUESTION 1------------//")

/*
Create an array called ages that contains
the following values: 3, 9, 23, 64, 2, 8, 28, 93.
Programmatically subtract the value of the first
element in the array from the value in the last
element of the array.
Do not use numbers to reference the last element,
find it programmatically.
ages[7] - ages[0] is not allowed!
*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages);

let lastMinusFirst = ages[ages.length - 1] - ages[0];
console.log("In this array called ages, the first element subtracted from the last element has a value of " + lastMinusFirst);

/*
Add a new age to your array and repeat the step
above to ensure it is dynamic. (works for arrays
of different lengths).
*/

ages.push(50); // 50 will be added to end of array using .push

console.log("Last element of array ages has a new value of " + ages[ages.length -1]);

console.log(ages); // checks that new element was pushed to the end of the array

lastMinusFirst = ages[ages.length - 1] - ages[0]; //re-do calculation

console.log("The first element subtracted from last element is now " + lastMinusFirst);

/*
Use a loop to iterate through the array and
calculate the average age.
*/

let totalAges = 0;
let averageOfAges = 0;

for (let i = 0; i <= ages.length - 1; i++) { // increments i as an index to go through each index of the array
    totalAges += ages[i]; // sum of all ages calculation
}
averageOfAges = totalAges / ages.length; // divides sum of ages by the length of ages
console.log("The sum of these ages is " + totalAges);
console.log("The average of the ages is " + averageOfAges);

console.log("// ----------QUESTION 2------------//")

/*
Create an array called names that contains
the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
*/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names);

/*
Use a loop to iterate through the array
and calculate the average number of letters per name.
*/

let totalChars = 0; // sum of all characters for all the names
let i = 0

while (i !== names.length) {
     totalChars += names[i].length;
     console.log("Total number of characters is now " + totalChars);
     i++;
 }
 let averageNumberOfLetters = totalChars / names.length // divides sum of characters by the number of names
 console.log("The average number of letters per name is " + averageNumberOfLetters);

/*
Use a loop to iterate through the array again
and concatenate all the names together, separated by spaces.
*/

let allNamesTogether = '';

for (let name of names) {
    allNamesTogether = allNamesTogether.concat(name) + " ";
}

console.log("Names concatenated: " + allNamesTogether);

console.log("// ----------QUESTION 3------------//")

// Question 3: How do you access the last element of any array?

console.log(`Answer: You access the last element of an array by writing
the array with an index of [arrayName.length - 1]
ex: arrayName[arrayName.length - 1];
This is because an array's index starts at 0, not 1
So the last element in an array will have an index
that's one less than the length of the array
For example, let's say an array has 8 elements.
the index of the last element is 7.`); // used back ticks to have line breaks

console.log("// ----------QUESTION 4------------//")

// Question 4: How do you access the first element of any array?

console.log(`Answer: You access the first element of an array by writing
the name of the array and an index of 0.
ex: arrayName[0];
Arrays are zero indexed,
so the first element's position will be at position 0.`)

console.log("// ----------QUESTION 5------------//")

/*
Create a new array called nameLengths.
Write a loop to iterate over the previously created names array
and add the length of each name to the nameLengths array.
For example:
let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array
*/

console.log(names); // prints the ages again so I don't have to look for it

let nameLengths = [];
for (let name of names) {
   nameLengths.push(name.length); // adds the length of each name to nameLengths
}

console.log("This is an array of the length of each name called nameLengths: ");
console.log(nameLengths); // checks that the push worked


console.log("// ----------QUESTION 6------------//");

/*
Write a loop to iterate over the nameLengths array
and calculate the sum of all the elements in the array.
*/

let iterable = 0;
let sumOfNameLengths = 0;

while (iterable < nameLengths.length) {
    sumOfNameLengths += nameLengths[iterable]; // adds lengths together at their specific indexes
    iterable++;
}

console.log("The sum of the elements in the nameLengths array is " + sumOfNameLengths);


console.log("// ----------QUESTION 7------------//");

/*
Write a function that takes two parameters, word and n,
as arguments and returns the word concatenated to itself
n number of times.
(i.e. if I pass in 'Hello' and 3,
I would expect the function to return 'HelloHelloHello').
*/

let wordConcatenated = (word, n) => {
    return word.repeat(n); 
    // return words concatenated to itself n number of times
    // .repeat method copies the text n amount of times
}
console.log(wordConcatenated("Hello", 3)); // passes "Hello" and 3. Hello prints 3 times.

console.log("// ----------QUESTION 8------------//");

/*
Write a function that takes two parameters,
firstName and lastName, and returns a full name.
The full name should be the first and the last name
separated by a space.
*/

function fullName (firstName, lastName) {
    return firstName + " " + lastName; // concatenates firstName and lastName
}

console.log(fullName("Gabriella", "Walrath"));

console.log("// ----------QUESTION 9------------//");

/*
Write a function that takes an array of numbers and returns true
if the sum of all the numbers in the array is greater than 100.
*/

let myArray = [10, 20, 30, 40, 50];

let sumOfElements = 0;

function sumMoreThanHundred (myArray) {
    for (let counterTwo = 0; counterTwo < myArray.length; counterTwo++) {
        sumOfElements += myArray[counterTwo];
        console.log("Value at index " + counterTwo + " in myArray is " + myArray[counterTwo]);
        if (sumOfElements > 100) { // checks that sum is greater than 100
            console.log("Return true when sum of elements in myArray is greater than 100.");
            return true;
        }
    }
}
console.log(sumMoreThanHundred(myArray));

console.log("// ----------QUESTION 10------------//");

/*
Write a function that takes an array of numbers
and returns the average of all the elements in the array.
*/

let myArrayTwo = [10, 20, 30, 40, 50];
let sumOfElementsTwo = 0;
let a = 0; // the index
let avg = 0;

let avgOfElements = (array) => {
    while (a < array.length) {
        console.log("Value at index " + a + " in myArrayTwo has a value of " + array[a]);
        sumOfElementsTwo += array[a];
        a++;
    }
    avg = sumOfElementsTwo / array.length;
    console.log("The average of the elements in myArrayTwo is " + avg);
}

avgOfElements(myArrayTwo);

console.log("// ----------QUESTION 11------------//");

/*
Write a function that takes two arrays of numbers
and returns true if the average of the elements
in the first array is greater than the average
of the elements in the second array.
*/

// used arrayThree and arrayFour 
// because I have arrays named myArray and myArrayTwo, 
// and I didn't want to confuse myself

let b = 0; // index for arrayThree
let c = 0; // index for arrayFour
let sumOfElementsThree = 0; // sum of elements in arrayThree
let sumOfElementsFour = 0; // sum of elements in arrayFour
let arrayThree = [10, 20, 30, 40, 50];
let arrayFour = [60, 70, 80, 90, 100];
let avgOfArrayThree = 0;
let avgOfArrayFour = 0;

function takesTwoArrays(arrayThree, arrayFour) {
/////// ARRAY THREE WHILE LOOP //////////
    while (b < arrayThree.length) {
        console.log("Index " + b + " for arrayThree is " + arrayThree[b]);
        sumOfElementsThree+= arrayThree[b];
        b++;
    }
    avgOfArrayThree = sumOfElementsThree / arrayThree.length;
    console.log("The average of arrayThree is " + avgOfArrayThree);

/////// ARRAY FOUR WHILE LOOP //////////

    while (c < arrayFour.length) {
        console.log("Index " + c + " for arrayFour is " + arrayFour[c]);
        sumOfElementsFour+= arrayFour[c];
        c++;
    }
    avgOfArrayFour = sumOfElementsFour / arrayFour.length;
    console.log("The average of arrayFour is " + avgOfArrayFour);

/////// COMPARING THE AVERAGES //////////

    if(avgOfArrayThree > avgOfArrayFour) {
        console.log("Avg of arrayThree is greater than the avg of arrayFour");
        return true;
    } else {
        console.log("Avg of arrayThree is NOT greater than the avg of arrayFour");
    }
}

takesTwoArrays(arrayThree, arrayFour);

console.log("// ----------QUESTION 12------------//");

/*
Write a function called willBuyDrink
that takes a boolean isHotOutside,
and a number moneyInPocket,
and returns true if it is hot outside
and if moneyInPocket is greater than 10.50.
*/

let isHotOutside = false;
let moneyInPocket = 12.50;
function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside && (moneyInPocket > 10.50)) {
        console.log("It's hot and I have more than $10.50, I'm getting a drink!");
        return true;
    } else {
        console.log("I am not buying a drink");
        return false;
    }
}

willBuyDrink(isHotOutside, moneyInPocket);

console.log("// ----------QUESTION 13------------//");

/*
Create a function of your own that solves a problem.
In comments, write what the function does and why you created it.
*/

/*
I typically forget that I need to buy more cat food
until I am all out, so I wrote a function that would let me know
how many cat food cans I have left each day. 

When I have two cans left, I get a reminder that tells me 
I need to go shopping. I chose 2 cans as my ending point 
because my cat eats one can in the morning and one at night.

These reminders help me avoid having no food at all, 
and then I don't have to quickly order a same day
a delivery of cat food, which is more expensive.
Then, I can just remind myself to go to the store 
the next day. 
*/

let numOfCans = 8;

 function catFood (numOfCans) {
    console.log("How much cat food do I have?");
     while (numOfCans > 2) {
        console.log("Today I have " + numOfCans + " cans of cat food left."); // each iteration (except when numOfCans is 2) shows I have enough food.
        numOfCans = numOfCans - 2;
      }
      if (numOfCans === 2) {
        console.log("Today I see that I have " + numOfCans +" more cans of cat food left. I need to get more tomorrow."); // conditional lets me know if I need to go shopping
      }
  }


 catFood(numOfCans);

