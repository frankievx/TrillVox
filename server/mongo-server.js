var http = require('http');
var requests = require('./requests.js');
var express = require('express');
var bodyParser = require('body-parser');
var db = require('mongodb'.Db);
var Server = require('mongodb').Server;

var app = express();
var port = 3000;
var ip = '127.0.0.1';
var httpServer = http.Server(app);

var defaultCorsHeaders = {
	"access-control-allow-origin": "*",
	"access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
	"access-control-allow-headers": "content-type, accept",
	"access-control-max-age": 10
};
var plainTextHeader = Object.assign({'content-type': 'text/plain'}, defaultCorsHeaders);
var jsonHeader = Object.assign({'content-type': 'text/plain'}, defaultCorsHeaders);

MongoClient.connect("mongodb://localhost:trillvox/", function(err, db) {
	if(!err) {
		console.log('we are connected'); 
	}
	else {
		console.log('error connecting to mongo')
	}
})

httpServer.listen({port}, function(err) {
	console.log('server listening err', err);
})