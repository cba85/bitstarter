var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer = new Buffer(1024);
    var fs = require('fs');
    var buffer = fs.readFile('./index.html', function (err, data) {
        if (err) throw err;
        console.log(data);
    });
    var c = buffer.toString('utf-8');
    response.send(c);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});