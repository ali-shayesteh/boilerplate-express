let express = require('express');
let app = express();

// app.get("/", function(req, res) {
//     res.send("Hello Express");
// })


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
})

app.use( "/public", express.static(__dirname + "/public") );

app.get("/json", function(req, res){
    const message = env.proccess.MESSAGE_STYLE === 'uppercase' 
    ? "HELLO JSON" 
    : "Hello json";

    res.json({"message":  message});
})

 module.exports = app;
