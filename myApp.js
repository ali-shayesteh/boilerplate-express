require('dotenv').config()
let express = require('express');
let app = express();

// app.get("/", function(req, res) {
//     res.send("Hello Express");
// })


app.get("/", function(req, res) {
    console.log(process.env.MESSAGE_STYLE)
    res.sendFile(__dirname + "/views/index.html");
})

app.use( "/public", express.static(__dirname + "/public") );

app.get("/json", function(req, res){

    res.json({"message":  process.env.MESSAGE_STYLE === 'uppercase'
    ? "HELLO JSON" 
    : "Hello json"});
})

 module.exports = app;
