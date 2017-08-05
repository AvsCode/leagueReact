const apiKey = require("./secrets.js");
const request = require("request");
let url = `https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=all&dataById=false&api_key=${apiKey}`;

class riotApi{
    // Upon creation of a new instance of the riotApi class object, we will make a call to the riot Api and populate our champion data.
    constructor(){
        // Pulling down champion data from the RiotApi for our use.
        request(url, (err, res, body) =>{
            if(err) console.log(err);
            else {
                console.log("Champions pulled down!");
                // the body of the return is always a string - need to jsonify it
                this.champData = JSON.parse(res.body);
                this.buildChampNames();
                this.buildChampionImageUrls();
            }
        });
    }
    getChampions(){
        return this.champData;
    }
    buildChampNames(){
        let champKeys = Object.keys(this.champData.keys);
        this.champData.champNames = champKeys.map((key) => {
            return this.champData.keys[key];
        });
    }
    buildChampionImageUrls(){
        /*For every champion in the names array (all the champions) we will add a smallImage property, which is just a string a splash Art array of strings and a loadingArt array of strings for all the different skins of the champion */
        this.champData.champNames.map((name) => {
            // getting each individual champ in our champData object
            let champ = this.champData.data[name];
            champ.smallImage = `https://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion/${name}.png`;

            champ.splashArt = champ.skins.map((skin) => {
                return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${skin.num}.jpg`;
            });
            champ.loadingArt = champ.skins.map((skin) => {
                return `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${name}_${skin.num}.jpg`;
            });
        });
    }
}
module.exports = new riotApi();


// const fs = require("fs");
/*At some point we need to maintain our champion data across server instances, and only call the riotAPI when the data gets too old (3 days or something similar), for now we will just pull it down from the riot server every time the we start ours*/
// let resDate = new Date(res.headers.date);
// fs.writeFileSync("riotApiAllChampsResponse.json", JSON.stringify(champData));
