function getRandNumber(max) {
	return Math.floor(Math.random() * max);
}

var number = getRandNumber(2);

var headsOrTails = "None";

if (number == 1) {
	document.getElementById("coin").innerHTML = "<h1>You flipped Heads!</h1>";
} else {
	document.getElementById("coin").innerHTML = "<h1>You flipped Tails!</h1>";
}