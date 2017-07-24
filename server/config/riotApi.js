const apiKey = require("./secrets.js");
const request = require("request");
let url = `https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=all&dataById=false&api_key=${apiKey}`;

// const fs = require("fs");
class riotApi{
    // Upon creation of a new instance of the riotApi class object, we will make a call to the riot Api and populate our champion data.
    constructor(){
        // Pulling down champion data from the RiotApi for our use.
        request(url, (err, res, body) =>{
            if(err) console.log(err);
            else {
                console.log("Champions pulled down!");
                /*At some point we need to maintain our champion data across server instances, and only call the riotAPI when the data gets too old (3 days or something similar), for now we will just pull it down from the riot server every time the we start ours*/
                // let resDate = new Date(res.headers.date);
                // fs.writeFileSync("riotApiAllChampsResponse.json", JSON.stringify(champData));
                this.champData = res.body;
            }
        });
    }
    getChampions(){
        return this.champData;
    }
}
module.exports = new riotApi();
