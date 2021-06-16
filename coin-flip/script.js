function getRandNumber(max) {
	return Math.floor(Math.random() * max);
}


const flipCoin = () => {
	const number = getRandNumber(2);

	const headsOrTails = number === 1 ? "Heads" : "Tails";

	const newHtml = `<h1>You flipped ${headsOrTails}!`;

	document.getElementById("coinimg").innerHTML = newHtml;
}