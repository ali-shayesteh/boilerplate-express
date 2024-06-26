require('dotenv').config()
let bodyParser = require('body-parser');
let express = require('express');
let app = express();


app.use(function midleware(req, res, next){
    const log = req.method + " " + req.path + " - " + req.ip;
    console.log(log);
    next();
}, bodyParser.urlencoded({extended: false}) )

app.use( "/public", express.static(__dirname + "/public") );

app.get("/now", function(req,res, next) {
    req.time = new Date().toString();
    next();
}, function(req, res) {
    res.json({time: req.time})
})

app.route("/name").get( function (req, res) {
    const fullName = req.query.first + " " + req.query.last;
    res.json({ name: fullName})
}).post(function (req, res) {
    const fullName = req.body.first + " " + req.body.last;
    res.json({ name: fullName})
})

app.get("/:word/echo", function(req, res){
    const word = req.params.word;
    res.json({echo: word})
})

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/json", function(req, res){
    res.json({"message":  process.env.MESSAGE_STYLE === 'uppercase'
    ? "HELLO JSON" 
    : "Hello json"});
})






 module.exports = app;
