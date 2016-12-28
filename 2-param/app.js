var express = require('express');
var app = express();

app.get('/:name', function (req, res) {
    var name = req.params.name;
    console.log('Requested ' + name);
    res.send('<!DOCTYPE html><html lang="en"><head>'
        + '<meta charset="utf-8">'
        + '<title>' + name + '</title>'
        + '</head><body>'
        + '<h1><tt>' + name + '</tt></h1>'
        + '</body></html>');
});

app.listen(8080); 
