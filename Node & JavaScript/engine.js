var express=require("express")
var app=express();
var router=express.Router();
app.set('view.engine','ejs');

app.get("/",function(req,res){
	response.render('index.ejs', {
	'regno':78,
	'name':'Tommmmmm',
	'phy':100,
	'che':80,
	'mat':75
	});
});

app.listen(8000);