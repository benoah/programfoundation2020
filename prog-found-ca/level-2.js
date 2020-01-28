//LEVEL 2


/*Question 1
Using the loop from question 5 above, only log the counter variable if it is an even number.
Hint: you can use the modulus % operator for this.*/

for (var count = 15; count <= 25; count++) {
    console.log(count);
  }




  
  for (var count = 15; count <= 25; count++) {
    
if (count % 2 === 0 ) { 
    console.log(count)
} 
 };



 
/* 
Question 2
Create a function that logs the sentence "I am a function".
Assign this function to a variable called innerFunction.
Create another function called outerFunction that accepts one argument.
Inside outerFunction, call the argument like you would a function - with parenthesis ().
Call outerFunction and pass in the innerFunction variable.
var innerFunction = function (){
    console.log ("Iam a function")  
  };
*/

  var innerFunction = function (){
    console.log ("Iam a function" )  
  };

 

  function outerFunction(arg){
    arg()

  }
  


  





/*

var innerFunction = function (){
    console.log ("Iam a function")  
  };
  innerFunction*/

/*
function whatIdontLike(arg, arg2,) {
    console.log("I dont like",arg+ " and "+ arg2);
  }
  whatIdontLike("banana","orange")
  I dont like banana and orange
  
  
*/
  