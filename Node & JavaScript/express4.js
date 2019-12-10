
var express=require("express")
var app=express();

var F1 = function(req, res, next){
	console.log("A");
	next();
}

var F2 = function(req, res, next){
	console.log("B");
	next();
}

var F3 = function(req, res, next){
	console.log("C");
}

app.get("/home",[F1, F2, F3]);
app.get("/home2", [F1, F2, function (req, res){
	console.log("D");
}])

app.listen(8000)