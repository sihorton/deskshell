/**
* function gets called on every request to the server.
*/
var path = require("path");
module.exports = function(server, params) {
	if (!server['socketServer']) server.socketServer = {};
	if (!server.socketServer.handlers) server.socketServer.handlers = {};
	
	server.socketServer.httpHandler = function(req, res) {
		//map request onto a file path.
		var dat = {};
		dat.filePath = server.dir + "/" + params.htdocs + "/";
		if(req.url == "/") req.url = params.defaultIndex;
		dat.extname = path.extname(req.url);
		if (server.socketServer.handlers[dat.extname]) {
			server.socketServer.handlers[dat.extname](req,res,dat);
		} else {
			server.socketServer.handlers["default"](req,res,dat);
		}
	}
	
	return {}
}