var express = require("express");
var app = express();
app.get("/*", function(req, res) {
	res.send({
		ipaddress: req.ip.replace("::ffff:", ""),
		language: req.get("accept-language").split(/,/)[0],
		software: req.get("user-agent").split(/()/g)[1]
	});
});
app.listen(process.env.PORT || 3000);