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

// Exporting the data so that we can use it in another file. 
module.exports = Triangle;
