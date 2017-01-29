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

// Here, we are exporting the data from this file so that we can call it in another file. 
module.exports = Pentagon;