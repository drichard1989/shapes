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

// Here, we are exporting the data from this file to be used in another file. 
module.exports = Square;