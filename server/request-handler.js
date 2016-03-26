var http = require('http');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var requests = require('./requests.js');

var app = express();

var defaultCorsHeaders = {
	"access-control-allow-origin": "*",
	"access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
	"access-control-allow-headers": "content-type, accept",
	"access-control-max-age": 10
};
var plainTextHeader = Object.assign({'content-type': 'text/plain'}, defaultCorsHeaders);
var jsonHeader = Object.assign({'content-type': 'text/plain'}, defaultCorsHeaders);

app.use(express.static("../client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', )