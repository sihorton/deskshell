/**
* function to serve files by default.
*/
var fs = require('fs')
	,mime = require('mime')
;
module.exports = function(server, params, dat) {
	if (!server['socketServer']) server.socketServer = {};
	if (!server.socketServer.handlers) server.socketServer.handlers = {};
	server.socketServer.handlers["default"] = function(req, res, dat) {
		fs.exists(dat.filePath + req.url, function(exists) {
			if (!exists) {
				res.end("file not found:" + req.url);
			} else {
				res.setHeader("Content-Type", mime.lookup(req.url));
				res.writeHead(200);
				
				var rstream = fs.createReadStream(dat.filePath + req.url);
				rstream.pipe(res);
			}
		});
	}
	return {}
}