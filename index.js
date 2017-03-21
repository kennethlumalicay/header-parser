var express = require("express");
var app = express();
var parse = require("parse-headers");
app.get("/*", function(req, res) {
	res.send("sasd");
	res.send(window.navigator.userAgent); //ip, language, software
});
app.listen(process.env.PORT || 3000);