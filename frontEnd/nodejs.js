var express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

const hostt = '0.0.0.0';
const portt = process.env.PORT || 3000;

app.listen(portt, hostt, function () {
    console.log("Server started.......");
});