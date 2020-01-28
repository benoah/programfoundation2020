// 1.Create an array called petArray with 3 string items in it: "cat", "cow", "dog".

var petArray = ["cat", "cow", "dog"];

// 2.Console log the value of the second item in petArray.

petArray.length //FIRST STEP //ANSWER 3

console.log(petArray [1]); // second step 

//answer cow


// 3: Add the item "sheep" to petArray using the push method.

console.log(petArray.push("sheep"));

// 4. Console log how many items there are now in petArray using the length method.

console.log(petArray.length);//4

// 5.Create an object called catObject with 3 properties: name, colour, age.
// Add appropriate values (and type of values) for each of these properties.
var catObject={
    name:"kris",
    colour:"green",
    age:16
};

// 6. Console log the value of the third property of catObject.

catObject.age;

// 7.Take the value of catObject (the {} part) and place it inside an array called catArray. Ask Teacher
              
  var catArray = [catObject.name, catObject.colour, catObject.age];


// 8.Loop throughcatArray and console log each property of each object inside (there will be only 1 object inside).

for (var i=0; i<catArray.length; i++){
    console.log(catArray[i]);
};

// 9. Create a function called logToConsole. 
// The function should accept 1 argument. 
//Decide on the name of the argument and console log its value inside the function.


function logToConsole(player) {
    console.log(player);
};


// 10.call the logToConsole value "ronaldo"

logToConsole("ronaldo");