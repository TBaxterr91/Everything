var express=require("express")
var app=express();
//var router=express.Router();
app.set('view.engine','ejs');

app.get("/add/:first/:second/",function(req,res){
	var first=parseInt(req.params.first)
	var second=parseInt(req.params.second)
	var result=first+second

	res.render('Results.ejs', {

		"name":"Tom",
		"first":first,
		"second":second,
		"result":result
	})
	});

app.listen(8000);