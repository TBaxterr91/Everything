var refevent = require("events")

var emitterref = new refevent.EventEmitter();   		

emitterref.on("Boom", function(){		
	console.log("Boomyboomboom");	
	});

emitterref.on("Fire", function(){
	console.log("Fireeeeeee");
	});

emitterref.emit("Boom")		
emitterref.emit("Fire")				

emitterref.on("Boom",function(){
		console.log("Boom Function 2222222");
	});

emitterref.emit("Boom")	