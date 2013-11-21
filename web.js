var fs = require('fs');
var express = require('express');

var app = express(express.logger())
// var app = express.createServer(express.logger());
var content = fs.readFileSync("index.html")


app.use(express.static(__dirname + '/'));

app.get('/', function(request, response) {
  response.send(content.toString());
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
