
var express=require("express")
var app=express();
//var router=express.Router();
app.set('view.engine','ejs');

app.get("/",function(req,res){
	res.render('homecalc.ejs');
	});

app.get("/range/:t", function(req,res) {
	res.render('rangecalc.ejs',{'T':req.params.t});
});

app.get("/timestable/:t/:r", function(req,res) {
	res.render('finalpage.ejs', {
		'T':req.params.t,
		'R':req.params.r
	});
})

app.listen(8000);