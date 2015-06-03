/**
* Plugin loader and manager object.
*/
var path = require("path");

module.exports = function(server, params) {

	var loadPlug = function(plugin, config) {			
		var plug = require(__dirname + path.sep + plugin + ".js")(server, config);
		return plug;
	}
	
	server.plug = {
		load:function(plugs, config) {
			if(typeof plugs == "string") {
				var p = loadPlug(plugs, config);
				return p;
			}
			if(plugs instanceof Array) {
				var plug;
				for(var i=0;i<plugs.length;i++) {
					console.log("load list:",plugs[i]);
					plug = server.plug.load(plugs[i].name,plugs[i]);
					if(plugs[i].subs) {
						server.plug.load(plugs[i].subs);
					}
				}
			} else if(typeof plugs == "object") {
				var p = loadPlug(plugs.name, plugs);
				if(plugs.subs) {
					server.plug.load(plugs.subs);
				}
				return p;
			}
			
		}
	}
	
	return server;
}

/**
call it like the following:-

var server = require("./plugins/index.js")({
	//--- object to be decorated ---
	"test":"myServerObject"
},{
	//plugin that loads the list of packages and params for them.
	"configType":"config.packageJson"
	,"configFile":__dirname+"/package.json"
	,"configKey":"plugins"
});
	example package.json
	
	{
	"name": "deskshell2-hello-world"
	,"author":"sihorton"
	,"main":"server.js"
	,"deskshell2":{
		"test":"hello world"
	},"plugins":[
		{"name":"demo"
			,"subs":[{"name":"demo2"}]
		}
	]
}

*/