var express=require("express")
var app=express();



function GTimatable(T,range,response){
		response.writeHead(200,{"content-type":"text/html"})
		response.write("Times Table of "+ T)
		for(var i=0;i<=range;i++){
			response.write(T + " x " + i +" = "+ (T*i))
			response.write("<br>")
		}
		response.end();
}


	app.get("/", function(req,res){

		res.writeHead(200,{"content-type":"text/html"})
		res.write("Select Times Tables")
		res.write("<br>")

		for(var i=2;i<=10;i++){
			res.write(`<A href='http://localhost:8000/tableoptions/${i}'>${i}</A>`)
			res.write("<br>")
		}
		res.end();
	});

	app.get("/tableoptions/:t",function(req,res){
		var i=parseInt(req.params.t)
		res.writeHead(200,{"content-type":"text/html"})
		res.write("Select Range")
		res.write("<br>")

		for(var r=10;r<=100;r=r+10){
		var table=parseInt(req.params.r)
		res.write(`<A href='http://localhost:8000/generatetable/${i}/${r}'>${r}</A>`)
		res.write("<br>")
		}
		
	})


	app.get("/generatetable/:t/:range",function(req,res){
		var table=parseInt(req.params.t)
		var range=parseInt(req.params.range)
		GTimatable(table, range,res)
		
	})
	



app.listen(8000)