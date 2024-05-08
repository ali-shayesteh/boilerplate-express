require('dotenv').config()
let express = require('express');
let app = express();


app.use(function midleware(req, res, next){
    const log = req.method + " " + req.path + " - " + req.ip;
    console.log(log);
    next();
})

// app.get("/", function(req, res) {
//     res.send("Hello Express");
// })


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/json", function(req, res){
    res.json({"message":  process.env.MESSAGE_STYLE === 'uppercase'
    ? "HELLO JSON" 
    : "Hello json"});
})


// app.use( "/public", express.static(__dirname + "/public") );



 module.exports = app;
