const API_KEY1 = "?api_key=RGAPI-2e2769bf-de2e-477b-9830-f151079c3c84";

const ACCOUNT_URL = "https://europe.api.riotgames.com/riot/account/v3/accounts/by-riot-id/"
const ACCOUNT_URL2 = "https://api.henrikdev.xyz/valorant/v1/account/"
const MATCH_URL = "https://europe.api.riotgames.com/riot/val/match/v3/matchlists/by-puuid/"
const MATCH_URL2 = "https://api.henrikdev.xyz/valorant/v3/by-puuid/matches/eu/"

let puuid =""

async function getPUUIDbyNameAndTag(gameName, tagLine){
    const req = ACCOUNT_URL2 + gameName + '/' + tagLine;
    console.log(req);

    const response = await fetch(req);
    const accountInformations = await response.json();
    
    let info = document.getElementById('info');
    if (accountInformations !== null) {
        info.innerText = "Le puuid est : " + accountInformations.data.puuid;
        info.classList.remove('invisible');
        puuid = accountInformations.data.puuid;
        getMatchByPUUID();
    }

}

async function getMatchByPUUID(){
    const req = MATCH_URL2 + puuid;
    console.log(req);

    const response = await fetch(req);
    const matchesInformations = await response.json();
    console.log(matchesInformations);
}