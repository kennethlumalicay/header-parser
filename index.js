var express = require("express");
var app = express();
var parse = require("parse-headers");
//app.use(express.static(__dirname + "/view"));
app.get("/", function(req, res) {
	res.send("fkin bitch display something!");
});
app.get("/whoami", function(req, res) {
	res.send(req);
});
app.listen(process.env.PORT || 3000);