const controller = require("./routeController.js");

function serverRouter(app){
    app.get("/champions", controller.getChampions);
}
module.exports = serverRouter;
