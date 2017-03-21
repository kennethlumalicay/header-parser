var express = require("express");
var app = express();
var parse = require("parse-headers");
app.get("/", function(req, res) {
	var timer = setTimeout(function() {
		res.send(window.navigator); //ip, language, software
    }, 200);
});
app.listen(process.env.PORT || 3000);