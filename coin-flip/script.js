// tells how to make rand number
function getRandNumber(max) {
	return Math.floor(Math.random() * max);
}

// creates random number
const flipCoin = () => {
	const number = getRandNumber(2);
	
	const headsOrTails = number === 1 ? "Heads" : "Tails";

	const newHtml = `<h1>You flipped ${headsOrTails}!`; // ${headsOrTails} just takes from the const

	document.getElementById("coinimg").innerHTML = newHtml; // gets the element and replaces it
}
