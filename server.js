const express = require("express");
const path = require("path");
const app = express();

var port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "dist")));

require("./server/config/routes.js")(app);

app.listen(port, ()=>{
    console.log(port);
});
