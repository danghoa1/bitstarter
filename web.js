var express = require('express');
var fs = require('fs');

var app = express(express.logger());


// Serve files
app.configure(function () {
	app.use('/bootstrap', express.static(__dirname + '/bootstrap'));
  	app.use('/css', express.static(__dirname + '/css'));
  	app.use('/js', express.static(__dirname + '/js'));
});

// Router
app.get('/', function(req,res) {
	res.sendfile(__dirname + '/html/index.html');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening to port " + port);
});