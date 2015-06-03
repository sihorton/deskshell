/**
* socketApi is called everytime a new connection is made.
*/
var connections = 0;
var prepareExit = false;
module.exports = function(server, params) {
		
	server.socketServer.socketApi = function(socket) {
		connections++;
		socket.emit('news', { hello: 'world' });
		socket.on('my other event', function (data) {
			console.log(data);
		});
		socket.on('exit', function (data) {
			console.log("exit window event called",data);
			if (data['event'] == "onunload" && params.exitOnZeroConnections){
				//close down
				process.exit(0);
			}
		});
		
		socket.on('disconnect', function() {
			console.log("client disconnection");
			connections--;
			if (connections ==0 ) {
				console.log("no connections");
				
			}
		});
	}
}