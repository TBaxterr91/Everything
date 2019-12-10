
var express=require("express")
var app=express();

app.get("/getdino","/alsogetdino","/canputmultiplehere" function(success,failure){
	failure.send("Snappy");
	});

app.post("/adddino", function(success,failure){
	failure.send("Trex");
	});

app.get("/trainer/:name/lives/:address", function (success,failure) {
	console.log(req.params);
	var N=req.params.name;
	var A=req.params.address;

	res.write(N+ " lives in " + A);
	res.end();
})

vsar server=app.listen(4001);