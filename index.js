var express = require("express");
var app = express();
var parse = require("parse-headers");
app.get("/*", function(req, res) {
	res.send("sasd");
});
var to = setTimeout(function() {
	app.get("/*", function(req, res) {
		res.send(window.navigator.oscpu);
	});
}, 1000);
to;
app.listen(process.env.PORT || 3000);