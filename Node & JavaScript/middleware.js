

var express=require("express")
var app=express();



app.use("Inbox", function (req, res, next){
	res.writeHead(200,{"content-type":"text/html"})
	console.log("This is middlewareeee");
	next();
})

app.get("/Inbox", function (req, res){
	console.log("This is your inboxxxxxxxxxxxx");	
})

app.listen(8000)