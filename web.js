var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs'), filename = 'index.html';
    fs.readFile(filename, 'utf8', function(err, data) {
	if (err) throw err;
	console.log('OK: ' + filename);
	console.log(data);
	response.send(data);
    });
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

