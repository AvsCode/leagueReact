class routeController{
    constructor(){
        this.riotApi = require("../riotApi.js");
        this.getChampions.bind(this);
    }
    getChampions(req, res){
        console.log(this);
        // this.riotApi.getChampions();
        // res.send(RiotApi.getChampions());
    }
}
module.exports = new routeController();
