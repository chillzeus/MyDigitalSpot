const apikey = "R2AFVY1J6D3VNV0DFTCR"

let brawlId;

let userData;

async function searchByURL(file) {
    let x = await fetch(file);
    let y = await x.json();
    userData = y;
    console.log(userData);
    display();    
}
let searchTerm = null;

function search() {
    searchTerm = document.getElementById("searchBox").value;
    searchByURL("https://api.brawlhalla.com/player/" + searchTerm + "/stats?api_key=" + apikey)
}

function display() {
    let winrate = userData.wins / userData.games
    winrate = winrate.toFixed(2)
    winrate = winrate * 100;
    let xpPercent = userData.xp_percentage.toFixed(2) * 100;
    document.getElementById("name").innerHTML = "<h1>" + userData.name + "</h1>"
    document.getElementById("winrateContainer").innerHTML = "<h3>Wins: " + userData.wins + " | Total games: " + userData.games + " | Winrate: " + winrate + "%</h3>"
    document.getElementById("level").innerHTML = "<h3>Level: " + userData.level + " (" + xpPercent + "%) | XP: " + userData.xp; + "</h3>"
}