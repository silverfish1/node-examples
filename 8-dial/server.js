var express = require('express');
var app = express();

app.get("/date",function(req,res){
  var d = new Date();
    console.log('Requested Date');
    //res.writeHead(200, { "Content-Type": "text/html" });
    res.send("Today date " + d);
    res.end();
});
app.get("/home",function(req,res){
    //res.writeHead(200, { "Content-Type": "text/html" });
    //res.writeHead(200, { "Content-Type": "text/plain" });
    res.send("Entered Text: "+req.query.name.toUpperCase());
    console.log('Requested home '+req.query.name);
    res.end();
});

app.get('/', function (req, res) {
      res.sendFile(__dirname + '/index.html');
});
app.listen(8080); 
