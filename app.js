// Store your birth year in a variable.

// Store a future year in a variable.

// Calculate your 2 possible ages for that year based on the stored values.
// For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, depending on what month it is in 2026.

// Output them to the screen like so: "I will be either NN or NN in YYYY", substituting the values.

var birthYear= 1992;
var futureYear = 2038;
var age= futureYear - birthYear;
document.write (`I will be either ${age}  or  ${age-1} by ${futureYear}`);

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var age= 28;
var maximumAge= 100;
var perDay= .5;
var total= (maximumAge - age) * (perDay * 365);
console.log (`You will need ` +  total + ' ' + 'to last you until the ripe old age of ' + maximumAge);

// The Fortune Teller
// Why pay a fortune teller when you can just program your fortune yourself?
// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids.

//returnts a random number * lowest number you set
var numKid= Math.floor(Math.random() * 11);
var partner= 'Jason Mamoa';
var  home= 'Hawaii';
var job= 'Food Blogger';

document.write(`You will be a ${job} in ${home}, and married to ${partner} with ${numKid} kids.`);


//-1- Write an expression that uses at least 3 different arithmetic operators.

// // The expression should equal 42.

// // Hint: +, -, *, /, and % are possible arithmetic operators

// // Your Code:
console.log(51-10+1);

// //-2- Create a string with the name of your favorite food. The first letter of the string should be capitalized.

// // Your Code:
document.write(`French Fries, Mangoes, Artichokes`);

// //-3- Create an array called egFamily and add "Julia", "James", and your name to the array. Then, print the egFamily to the console using console.log.

// // Your Code:
let egFamily = ['Julia', 'James', 'Katie'];
console.log(egFamily);

// //4-4 Fix the right side expression so it evaluates to true.
// // "ALL Strings are CrEaTeD equal" == "All STRINGS are CrEaTED Equal"

// // Your Code:
console.log("ALL Strings are CrEaTeD equal" !== "All STRINGS are CrEaTED Equal");




// //-5- Use this equation and the variables fahrenheit and celsius to print the Fahrenheit equivalent of 12°C.
// //  Use the Celsius-to-Fahrenheit formula to set the fahrenheit varible:
// //F = C x 1.8 + 32
// //Log the fahrenheit variable to the console.

// // Your Code:
var celsius=12;
var farenheit= celsius * 1.8 + 32;
console.log(farenheit);


// //-6- Build a string using concatenation by combining the lines from this famous haiku poem by Yosa Buson.

// // Blowing from the west
// // Fallen leaves gather
// // In the east.

// // Each string should be printed on its own line.
// // Hint: You will need to use special characters to produce the following output. For a refresher, feel free to review the previous Escaping Strings topic in this lesson.

// // Your Code: 

console.log("Blowing from the west\nFallen leaves gather\nIn the east.")



// //-7- Define two variables called thingOne and thingTwo and assign them values. Print the values of both variables in one console.log statement using concatenation. For example,

// // red blue
// // where "red" is the value of thingOne and "blue" is the value of thingTwo. Don't forget to use semicolon at the end of each statement!

// // Your Code:
var thingOne= "yellow";
var thingTwo= "elephant";
console.log(thingOne + " " + thingTwo);


//  //-8- Create a variable called fullName and assign it your full name as a string.

// // Your Code:
var fullName= "Katie Broz";
console.log(fullName);




//  //-9- Create a variable called bill and assign it the result of 10.25 + 3.99 + 7.15 (don't perform the calculation yourself, let JavaScript do it!). 
// //Next, create a variable called tip and assign it the result of multiplying bill by a 15% tip rate. Finally, add the bill and tip together and store it into a variable called total.

// // Print the total to the JavaScript console.

// // Hint: 15% in decimal form is written as 0.15_._

// // TIP: To print out the total with a dollar sign ( $ ) use string concatenation. To round total up by two decimal points use the toFixed() method. To use toFixed() pass it the number of decimal points you want to use. For example, if total equals 3.9860, then total.toFixed(2) would return 3.99.

// // Your Code:
var bill=10.25 + 3.99 +7.15;
var tip=bill * 0.15;
var total=bill + tip;
console.log("$" + total.toFixed(2));


// //-10- Declare and assign values to three variables for each part of the sentence that changes (firstName, interest, and hobby).
// Concatinate and Print out the result in the console

// // Your Code:
var firstName= "Katie";
var interest= "music";
var hobby= "coding";
console.log("My name is " + firstName + " " + "and I like " + interest + " " + "and " + hobby);


// //-11- Use variables and string concatenation to create your own awesome message and store it in an awesomeMessage variable. 
// Finally, print your awesome message to the JavaScript console.

// // Your Code:
var awesomeMessage="Hola Mundo";
console.log(awesomeMessage);

//  //-12- Create 2 variables one called big and one called small. Set the strings to each: "I am Big like a elepant!" "I am Small like a mouse!". Use string methods to make the 
// //'small' variable lowercase and the 'big' variable capital.
// //console.log out the results

// // Your Code:
var big="I am Big like a elepant!";
var small="I am Small like a mouse!";
console.log(big.toUpperCase() + " "+ small.toLowerCase());