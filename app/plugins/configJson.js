/**
* Load a json config, for example package.json
*/
var fs = require("fs");
var pluginName = "configJson";
module.exports = function(server, params) {
	server.fn.configJson = function(params) {
		fs.readFile(params.file, 'utf8', function (err, data) {
			if (err) {
				server.error("configJson",err);
			} else {
				try {
					server[params.key] = JSON.parse(data);
				} catch(err) {
					server.error("configJson",err);
				}
				if(params.onLoaded) params.onLoaded(server);
			}
		}); 
	};
	if (params && params.key) server.fn.configJson(params);
	return {};
}