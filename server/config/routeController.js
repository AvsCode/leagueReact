class routeController{
    constructor(){
        this.riotApi = require("../riotApi.js");
    }
    getChampions(req, res){
      res.send(this.riotApi.getChampions());
    }
}

module.exports = new routeController();
