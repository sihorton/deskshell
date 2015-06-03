/**
* Open a port and then handle incoming requests.
*/
module.exports = function(server, params) {
	if (!server['socketServer']) server.socketServer = {};
	server.socketServer.start = function(params){
		
		server.socketServer.app = require('http').createServer(server.socketServer[params.httpHandler]);
		server.socketServer.io = require("socket.io")(server.socketServer.app);
		server.socketServer.app.listen(params.port);
		
		server.socketServer.io.on('connection', server.socketServer.socketApi);
	}
	server.socketServer.restartSocketApi = function() {
		server.socketServer.io.on('connection', server.socketServer.socketApi);
	}
	if (params && params.port) server.socketServer.start(params);
	
console.log("demo plugin loaded");
	return {
		message:"loaded"
	}
}