var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/login', (req, res) => {
    console.log("request-------", req.body);
    if(req.body.phone_number === 'tare@gmail.com' && req.body.password === 'atare') {
        res.send({
            userName: "Asawari Tare",
            action : "logging"

        })
    } else if(req.body.firstName === 'atare' && req.body.lastName === 'atare' &&
     req.body.signUpEmail === 'tare@gmail.com' && req.body.password === 'atare' && req.body.confirmPassword === 'atare') {
        res.send({
            userName: "Asawari Tare",
            action : "logging"

        })
    }
    else{
        res.status(401).json("Not valid creds--------")
    }
})

var port = 4000

app.listen(port, () => {
    console.log("server running " + port)
})