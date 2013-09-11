// Include modules
var express = require('express');	// eases http request/response management
var fs = require('fs');				// allows file read/write

// Create a HTTP server
var app = express(express.logger());


// Serve files to client
app.configure(function () {
	app.use('/bootstrap', express.static(__dirname + '/bootstrap'));
  	app.use('/css', express.static(__dirname + '/css'));
  	app.use('/js', express.static(__dirname + '/js'));
  	app.use('/img', express.static(__dirname + '/img'));
  	
});

// HTTP request Router (pick the right html)
app.get('/', function(req,res) {
	res.sendfile(__dirname + '/html/index.html');
});


// Listen to a port
var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening to port " + port);
});