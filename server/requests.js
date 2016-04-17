var path = require('path');
// var db = require('mongodb').db;
var db = require('./mongo-server.js');
var MongoClient = require('mongodb').MongoClient;
var defaultCorsHeaders = {
"access-control-allow-origin": "*",
"access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
"access-control-allow-headers": "content-type, accept",
"access-control-max-age": 10
};
var plainTextHeader = Object.assign({'content-type': 'text/plain'}, defaultCorsHeaders);
var jsonHeader = Object.assign({'content-type': 'text/json'}, defaultCorsHeaders);

exports.serveAssets = function(req, res) {
	console.log('serveAssets', req);
	res.sendFile(path.join( __dirname,'../client/index.html'));
}

exports.serveArticles = function(req, res) {
	res.set(jsonHeader);
	res.status(200).send(JSON.stringify({
    results: db.articles
  }));
}
