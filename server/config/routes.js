const controller = require("./routeController.js");

function serverRouter(app){
    app.get("/champions", (req, res) => {
        controller.getChampions(res, res);
    });
    app.get("/champion/*", (req, res) => {
        res.redirect("/");
    })
}
module.exports = serverRouter;
