
var express=require("express")
var app=express();
var bodyparser=require("body-parser")
var cookieparser=require("cookie-parser");
var session = require("express-session");
var mysql = require("./mysqlconnection.js");
var con = mysql();
//var router=express.Router();
app.set('view.engine','ejs');

app.use(cookieparser());
app.use(session({secret:"Shhh its a secre!"}));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));

app.get("/",function(req,res){
	res.render('projhome.ejs');
	});

app.get("/login", function(req,res) {
	res.render('projlogin.ejs');
		});

app.post("/login", function(req,res) {
	var user=req.body.inputUsername;
	var password=req.body.inputPassword;
	var query=`select * from users where Username='${user}' and Password='${password}'`;
	con.query(query,function(err,results,fields){
		if(!(err)){
			results.forEach(function(data){
				req.session.user=user
				req.session.role=data.Role
				res.render("projshowrecords.ejs");

			})
		}
	})
});

app.get("/user", function(req,res) {
	res.render('projuser.ejs');
		});

app.post("/user", function(req,res) {
	var role=req.body.Role;
	var user=req.body.createUsername;
	var name=req.body.createName;
	var password=req.body.createPassword;
	var query=`insert into users values('${role}','${user}','${name}','${password}')`;

	con.query(query, function(err,results,fields){
		if(err){
			console.log(err)
		}
			else{
					req.session.user=user
					req.session.role=role
					con.query("select * from Personal",function(err,results,fields){
						if(!(err)){
							res.render('projshowrecords.ejs',{'Records':results});
						}
				})
	}
	//res.end();
})
})

app.get("/showrecords", function(req,res) {
	var query=`select * from Personal`;
 	con.query(query,function(err,results,fields){
	if(!(err)){
			res.render('projshowrecords.ejs',{'Records':results});
		}
	})
	
		});

app.listen(8000);