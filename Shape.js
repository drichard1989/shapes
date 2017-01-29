'use strict';

// Here we are importing the data from the other file. 
const Square = require("./square.js");
const Triangle = require("./triangle.js");
const Pentagon = require("./pentagon.js");

// Here, we are creating the constructor named Shape.

function Shape() {
	// Here, if the user did not use the 'new' keyword, it automatically applies it. 
	if(!(this instanceof Shape)){
		return new Shape();
	}
}

// Here, we are adding the get_type method to Shape.prototype.
// This method will now be inherited by any children of Shape, including the ones we are adding specifically for the completion of this assignment. It returns the objects type.

Shape.prototype.get_type = function(){
	return this.__proto__.constructor;
}


// Here, we are going to set the prototype of this object equal to new Shape(). We are also goign to updeate Triangle.prototype.constructor to equal Triangle
Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

// Here, we are going to set the prototype of this object equal to new Shape(). We are also going to update Square.prototype.constructor to equal Square.
Square.prototype = new Shape();
Square.prototype.constructor = Square;

// Here, we are going to set the prototype of this object equal to new Shape(). We are also going to update Pentagon.prototype.constructor to equal Pentagon.
Pentagon.prototype = new Shape();
Pentagon.prototype.constructor = Pentagon;


// Creating a divider for our consoles.
console.log("----------------------------------------\n");

// Creating a new Triangle object and passing in some parameters
var trian = new Triangle(1, 2, 3);

// Organizing our Consoles.
console.log("Here is our Triangle Testing Area:")

console.log("trian instanceof Shape?");
console.log(trian instanceof Shape);

console.log("trian instanceof Triangle?");
console.log(trian instanceof Triangle);

console.log("trian instanceof Square?");
console.log(trian instanceof Square);

console.log("trian instanceof Pentagon?");
console.log(trian instanceof Pentagon);


console.log("trian's type");
console.log(trian.get_type());

console.log("----------------------------------------\n");

// Creating a new Square object and passing in some parameters
var squat = new Square(1, 2, 3, 4);

// Organizing our Consoles.
console.log("Here is our Square Testing Area:")

console.log("squat instanceof Shape?");
console.log(squat instanceof Shape);

console.log("squat instanceof Triangle?");
console.log(squat instanceof Triangle);

console.log("squat instanceof Square?");
console.log(squat instanceof Square);

console.log("squat instanceof Pentagon?");
console.log(squat instanceof Pentagon);


console.log("squat's type");
console.log(squat.get_type());

console.log("----------------------------------------\n");

// Creating a new Square object and passing in some parameters
var Pent = new Pentagon(1, 2, 3, 4, 5);

// Organizing our Consoles.
console.log("Here is our Square Testing Area:")

console.log("Pent instanceof Shape?");
console.log(Pent instanceof Shape);

console.log("Pent instanceof Triangle?");
console.log(Pent instanceof Triangle);

console.log("Pent instanceof Square?");
console.log(Pent instanceof Square);

console.log("Pent instanceof Pentagon?");
console.log(Pent instanceof Pentagon);


console.log("Pent's type");
console.log(Pent.get_type());






