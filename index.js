var express = require("express");
var app = express();
var parse = require("parse-headers");
//app.use(express.static(__dirname + "/view"));
app.get("/", function(req, res) {
	res.send("fkin bitch display something!");
});
app.get("/whoami", function(req, res) {
	console.log("in");
	var ip = req.headers.["x-forwarded-for"] || req.connection.remoteAddress;
	console.log("the");
	var os = req.headers.["user-agent"];
	console.log("fkin");
	var lang = req.headers.["accept-language"];
	console.log("html");
	res.end(ip + os + lang);
});
app.listen(process.env.PORT || 3000);