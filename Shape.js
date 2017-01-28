'use strict';

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

// Now, we are going to be creating a contructor for our Triangle. It will take three arguements, for the sides. Just like before, we will also be protecting this fuction against bad developers and create a conditional if statement to make sure the new keyword is used. 

function Triangle(side1, side2, side3){
	if(!(this instanceof Triangle)){
		return new Triangle(side1, side2, side3);
	}

	// Now we need to define the parameters of this to the side properties.

	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
}


// Here, we are going to set the prototype of this object equal to new Shape(). We are also goign to updeate Triangle.prototype.constructor to equal Triangle
Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

// Now, we are going to be creating a constructor for our Square. It will take four arguements, for the sides. Just like before we will also be protecting this function against bad developers and create a conditional if statement to make sure the new keyword is used.
function Square (side1, side2, side3, side4){
	if(!(this instanceof Square)){
		return new Square(side1, side2, side3, side4);
	}

	// Now, we need to define the parameters of this to the side properties. 
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
}

// Here, we are going to set the prototype of this object equal to new Shape(). We are also going to update Square.prototype.constructor to equal Square.
Square.prototype = new Shape();
Square.prototype.constructor = Square;

// Now, we are going to be creating a constructor for our Pentagon. It will take five arguements, for the sides. Just like before we will also be protecting this function against bad developers and create a conditional if statement to make sure the new keyword is used.

function Pentagon(side1, side2, side3, side4, side5){
	if(!(this instanceof Pentagon)){
		return new Pentagon;
	}

	// Now, we need to define the parameters of this to the side properties.
	this.side1 = side1;
	this.side2 = side2;
	this.side3 = side3;
	this.side4 = side4;
	this.side5 = side5;

}

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






