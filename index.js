var express = require("express");
var app = express();
var parse = require("parse-headers");
app.get("/*", function(req, res) {
	res.send("sasd");
});
app.post("/*", function(req,res) {
	res.send(window.navigator);
});
app.listen(process.env.PORT || 3000);