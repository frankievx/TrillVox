var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var requests = require('./requests.js');
var browserify = require('browserify-middleware');
// var reactify = require('reactify');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/main.js', browserify('./client/js/main.js', { transform: ["reactify"] } ))
app.use(express.static(path.join(__dirname,"../client")));


app.get('/', function(req, res) {
	console.log("getting index is working")
	requests.serveAssets(req, res);
});

exports.app = app;