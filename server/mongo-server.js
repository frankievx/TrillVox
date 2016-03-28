var http = require('http');
var requestHandler = require('./request-handler.js');
var bodyParser = require('body-parser');
var db = require('mongodb').Db;
var MongoClient = require('mongodb').MongoClient;

var port = 3000;
var ip = '127.0.0.1';
var server = http.createServer(requestHandler.app);


MongoClient.connect("mongodb://localhost:27017/trillvox", function(err, db) {
	if(!err) {
		console.log('we are connected'); 
		db.createCollection('test');
		collection = db.collection('test');
		collection.insert({stuff: 12, string: 'this should work'});
	}
	else {
		console.log('error connecting to mongo')
	}
})

server.listen(port, function(err) {
	if(err) {
		console.log('server listening err', err);
	} 
	else {
		console.log('server is listening');
	}
})