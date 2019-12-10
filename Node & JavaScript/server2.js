
var http1 = require("http");


var Process=function(request, response){
	console.log("test");
	response.writeHead(200,{"content-type":"text/html"});
	if(request.url=="/"){
			response.write("What are you loking for");
	
	}
	if(request.url=="/home"){
		response.write("<B> This is homepage</B>");
		response.write("made by NBS");
	}
	if (request.url=="/aboutus"){
		response.write("<B> This is aboutus</B>");
		response.write("made by NBS");
			}
	response.end();
};


var server = http1.createServer(Process);
server.listen(4001);





