/**
* Example server script.
*	- this should open a port and then serve html files from the htdocs directory.
*	- open a socket to browser for two way event communication.
*/

//demo script to show a simple server implementation
//we could add plugins to make this easy for us.


var server = require("./plugins/index.js")( {
	fn:{}
	,dir:__dirname
	,error:function(name,obj) {
		console.log("error:"+name,obj);
	}
} );
server.plug.load({
	"name":"configJson"
	,"file":__dirname+"/../package.json"
	,"key":"app"
	,"onLoaded":function(server) {
		console.log("loaded config");
		console.log(server);
		console.log(server.app.plugins);
		server.plug.load(server.app.plugins);
		console.log(server);
		//open a portable chrome browser...
		deskshell = require("deskshell2-win")();
		console.log(deskshell);
		deskshell.launchPortable();
	}
});
