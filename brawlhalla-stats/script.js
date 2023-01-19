const apikey = "R2AFVY1J6D3VNV0DFTCR"

let brawlId;

let steamSearchData;

async function searchByURL(file) {
    let x = await fetch(file);
    let y = await x.json();
    console.log(y)
}

let searchTerm = null;

function search() {
    searchTerm = document.getElementById("searchBox").value;
    console.log(searchTerm);
    if (searchTerm.length == 17) {
        searchByURL("https://api.brawlhalla.com/search?steamid=" + searchTerm + "&api_key=" + apikey)
    }
    else {
        searchByURL("https://api.brawlhalla.com/player/" + searchTerm + "/stats?api_key=" + apikey)
    }
}