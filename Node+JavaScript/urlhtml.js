
var http2=require("http")
var myurl=require("url")



var process = function(req,res){
	var urldata = myurl.parse(req.url,true)
	if(urldata.pathname=='/add'){
		var result=parseInt(urldata.query.no1)+parseInt(urldata.query.no2);
		res.write("Result is " + result);
		res.end();
	}
	
 	if(urldata.pathname=='/sub'){
		var result=parseInt(urldata.query.no1) - parseInt(urldata.query.no2);
		res.write("Result is " + result);
		res.end();
	}

 	if(urldata.pathname=='/multi'){
		var result=parseInt(urldata.query.no1) * parseInt(urldata.query.no2);
		res.write("Result is " + result);
		res.end();
	}

 	if(urldata.pathname=='/divide'){
		var result=parseInt(urldata.query.no1) / parseInt(urldata.query.no2);
		res.write("Result is " + result);
		res.end();
	}
	res.end()
}



var server = http2.createServer(process);
server.listen(4001);