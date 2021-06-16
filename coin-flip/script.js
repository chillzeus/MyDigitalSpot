function getRandNumber(max) {
	return Math.floor(Math.random() * max);
}


const flipCoin = () => {
	const number = getRandNumber(2);

	const newHtml = `<h1>You flipped ${(number === 1 ? "Heads" : "Tails")}!`;

	document.getElementById("coinimg").innerHTML = newHtml;
}