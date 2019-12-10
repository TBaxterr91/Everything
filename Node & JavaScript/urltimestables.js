
var http2=require("http")
var myurl=require("url")


var process = function(req,res){
	var urldata = myurl.parse(req.url,true)
	res.writeHead(200,{'content-type':'text/html'});
	if(urldata.pathname=="/"){
		res.write("<A href='http://localhost:4001/TimesTable'> TimesTable </A>");
			// THIS CREATES A HYPERLINK WITH THE NAME TimesTable WHICH LEADS TO THIS URL
		res.write('<br>');
		res.write("<A href='http://localhost:4001/SelectTimesTable'> Select Times Table</A>");
	}

	if(urldata.pathname=='/TimesTable'){
		for(var i=1;i<=10;i++){
			res.write(2+' x '+ i + ' = ' +(2*1));
			res.write('<br>');
		}
	}

	if(urldata.pathname=='/SelectTimesTable'){
		res.write("<H2> Select any Number");
				res.write('<br>');
		for(var i=2;i<=10;i++){
			res.write('<A href="http://localhost:4001/generatetable?T='+i+'">'+i+'</A>');
			res.write('<br>');
		}
	}

	if(urldata.pathname=='/generatetable'){
			var TimesTable=urldata.query.T;
		for (var i=1;i<=10;i++){
			res.write(TimesTable + "x" + i + "=" + (TimesTable*1));
			res.write('<br>');
		}
	}
	res.end()
}

var server = http2.createServer(process);
server.listen(4001);