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

// so we can calculate the best legend
// maybe change these to a direct reference to json variables?
let highestWins = 0;
let bestLegend;
let bestLegendLevel;
function calculateLegend() {
    for (let i = 0; i < 52; i++) {
        if (userData.legends[i].wins >= highestWins) {
            highestWins = userData.legends[i].wins;
            bestLegend = userData.legends[i].legend_name_key;
            bestLegendLevel = userData.legends[i].level;
        }
    }
    console.log(bestLegend)
}

function display() {
    calculateLegend();

    // making some percentages look nicer
    let winrate = userData.wins / userData.games
    winrate = winrate.toFixed(2)
    winrate = winrate * 100;
    let xpPercent = userData.xp_percentage.toFixed(2) * 100;

    // basic player information
    document.getElementById("name").innerHTML = "<h1>" + userData.name + "</h1>"
    document.getElementById("winrateContainer").innerHTML = "<h3>Wins: " + userData.wins + " | Total games: " + userData.games + " | Winrate: " + winrate + "%</h3>"
    document.getElementById("level").innerHTML = "<h3>Level: " + userData.level + " (" + xpPercent + "%) | XP: " + userData.xp; + "</h3>"
    document.getElementById("legend").innerHTML = "<h3>Best legend: " + bestLegend + " | Wins: " + highestWins + " | Level: " + bestLegendLevel + "</h3>"

    // ranked stuff here soon
}