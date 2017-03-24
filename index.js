var express = require("express");
var app = express();
var parse = require("parse-headers");
app.use(express.static(__dirname + "/view"));
app.get("/*", function(req, res) {
	res.send("sasd");
	var ip = req.headers.x-forwarded-for || req.connection.remoteAddress;
	var os = req.headers.user-agent;
	var lang = req.headers.accept-language;
	res.end(ip + os + lang);
});
app.listen(process.env.PORT || 3000);