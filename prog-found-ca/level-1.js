// Level 1

//Question 1
// Declare and initialise a variable with a string value.

var name = "ben";

//Question 2
//Create an object variable called person and give it two properties (a key and a value) of your choice.

var person = {
  name: "ben",
  LastName: "moussa"
};

//Question 3
// Create a variable called outOfStock and assign it a boolean value.
// Create an if else statement that checks the value of outOfStock.
// If it is true, console log "Out of stock". Otherwise log "In stock".

var outOfStock = true;

if (outOfStock === true) {
  console.log("outOfStock");
} else if (outOfStock === false) {
  console.log("in stock");
}

//Question 4
//Create an array of five numbers.
//Loop through the array and console log each value.

var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}

//Question 5
//Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop.
for (var count = 15; count <= 25; count++) {
  console.log(count);
}

//Question 6
// Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.

for (var count = 15; count <= 25; count++) {
  if (count === 20) {
    console.log(count);
  }
}

/*Question 7
Create an array of two objects. Each object must have the same three properties (with different values):
one property with a string value
one property with a number value
one property with a boolean value
Loop through the array and console log the number value and the boolean value.
*/

var shoes = [
  {
    name: "adidas",
    size: 8.5,
    inStock: true
  },
  {
    name: "Nike",
    size: 9.5,
    inStock: false
  }
];
for (var i = 0; i < shoes.length; i++) {
  console.group(shoes[i].size);
  console.group(shoes[i].inStock);
}

/*Question 8
Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
Inside the function, log the string "I don't like " together with the argument.
Call the function and pass in a value of your choice.
Example:
If you pass in the value "giraffes", the function should log: "I don't like giraffes". ask teacher*/


function whatIdontLike(arg, arg2,) {
  console.log("I dont like",arg+ " and "+ arg2);
}
whatIdontLike("banana","orange")
// I dont like banana and orange




/*Question 9
Create a function that accepts two arguments.
Inside the function, subtract the second argument from the first and console log the result.*/


function SubTwoNumbers(shoeSize1, shoeSize2) {
    return shoeSize1 - shoeSize2 ;
 };
 
 SubTwoNumbers(8.5, 9.5);


 /*Question 10
Create an empty array.
Create a function that accepts one argument.
Inside the function, add the argument to the array.
Call the function and pass in a value of any type.*/


var emptyArray = [];


function addItemToArray(item) {
    emptyArray.push(item);
}

addItemToArray('firstItem');

console.log(emptyArray);

addItemToArray('ben')





// topical 
