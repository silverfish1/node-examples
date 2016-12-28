var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});
app.get("/date",function(req,res){
  var d = new Date();
  console.log('Requested Date');
  res.type('text/plain');
  res.send("Today date " + d);
  res.end();
});

app.listen(8080); 
