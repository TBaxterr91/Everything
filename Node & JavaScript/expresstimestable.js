
var express=require("express")
var app=express();



function GTimatable(T,response){
		response.writeHead(200,{"content-type":"text/html"})
		response.write("Times Table of "+ T)
		for(var i=0;i<=10;i++){
			response.write(T + " x " + i +" = "+ (T*i))
			response.write("<br>")
		}
		response.end();
}


	app.get("/", function(req,res){
		res.writeHead(200,{"content-type":"text/html"})
		res.write("Select Times Tables")
			res.write("<br>")
		for(var i=0;i<=10;i++){
			res.write(`<A href='http://localhost:8000/generatetable/${i}'>${i}</A>`)
			res.write("<br>")
		}
		res.end();
	});

	app.get("/generatetable/:t",function(req,res){
		var table=parseInt(req.params.t)
		GTimatable(table,res)
		
	})
	



app.listen(8000)