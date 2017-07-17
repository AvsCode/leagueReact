const apiKey = require("./config/secrets.js");
const request = require("request");
class riotApi{
    constructor(app){
        let champData;
        request(`https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=all&dataById=false&api_key=${apiKey}`, (err, res, body) =>{
            if(err) console.log(err);
            else champData = body;
        });
    }
}

module.exports = riotApi;
