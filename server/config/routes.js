const controller = require("./routeController.js");

function serverRouter(app){
    app.get("/champions", (req, res) => {
        controller.getChampions(res, res);
    });
}
module.exports = serverRouter;
