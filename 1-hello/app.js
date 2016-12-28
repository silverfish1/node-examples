var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var name = req.params.name;
    console.log('Requested root');
    res.send('<!DOCTYPE html><html lang="en"><head>'
        + '<meta charset="utf-8">'
        + '<title> Hello </title>'
        + '</head><body>'
        + '<h1><tt> Hello  </tt></h1>'
        + '</body></html>');
});

app.listen(8080); 
