const controller = require("./routeController.js");

function serverRouter(app){
    app.get("/", controller.default);
}

module.exports = serverRouter;
