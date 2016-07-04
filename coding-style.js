// Variable assignment
var age = 27; // <- semicolon at the end of each statement
//     ^ ^ having white space around = sign is good
// it makes the code more readable

var name = "Kara";

// Curly brackets
var num = -10;

if (num > 0) { // <- always have {} even if you have one statement. if/else/for/while
    console.log('the number is greater than zero');
}

if (num > 0) {
    // .. code goes here
}

// Functions

/*
These three different ways of declaring functions are not 100% equivalent.
We will see together the differences between them.

Use the first version.
*/

function doSomething(sentence) {
    // ... code goes here. USE THIS FORMAT :)
}

var doSomething = function(sentence) {
    // ... code goes here
}

var doSomething = function doSomething(sentence) {
    // ... code goes here
}