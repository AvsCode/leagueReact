const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.static(path.join(__dirname, "client")));

require("./server/config/routes.js")(app);

app.listen(5000, ()=>{
    console.log("Listening on port 5000");
});
