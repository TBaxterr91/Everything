
var express=require("express");
var cookieparser=require("cookie-parser");
var session = require("express-session");

var app=express();
app.use(cookieparser());
app.use(session({secret:"Shhh its a secre!"}));

app.get("/",function(req,res) {
	console.log("abc");
	req.session.user="Tom"
	req.session.pass="abc"
	res.send("Session Created")
})

app.get("/show", function(req,res) {
	//var session=req.session
	res.send("username: "+req.session.user)
})

app.listen(8000);