var express = require('express');
var cookieparser = require('cookie-parser');
var session = require('express-session');
var mysql = require("./mysqlconnection.js");
var con = mysql();
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieparser());
app.use(session({secret:"slipperly secret snake"}));
//loginpage
//to check is a valid user
app.post('/loginCheck',function(req,res){
    var un = req.body.username
    var ps = req.body.password
		con.connect(function(err){	
					con.query(`select username, password, role from users where username ='${un}' and password = '${ps}'`,function(error, results, fields){
						if(results.length<1){
							res.redirect("http://localhost:4001")
							console.log("result is null")
						}
						else {
							req.session.role=results[0].role;
							req.session.user=un;
							req.session.pass=ps;
							res.redirect("/sucLog")
							}							
					});
			});
	});
//homepage once succesfully logged in
app.get('/sucLog',function(req,res){
			con.connect(function(err){	
					con.query(`select * from employees order by empno`,function(error, results, fields){
							res.send(results);		
					});
			});	
});
app.get('/LogOut',function(req,res){
	req.session.destroy(function(err){
     if(err){
        console.log(err);
     }else{
         res.redirect('/Login');
     }
  });
})
//create a new user or admin
app.post('/cUser',function(req,res){
	var user = req.body.username;
	var pass = req.body.password;
	var name = req.body.name;
	var role = req.body.role;
			con.connect(function(err){	
					con.query(`insert into users values('${name}',${role},'${user}','${pass}')`,function(error, results, fields){
						console.log(error)
					});
			});	
});
app.get('/editConfirm/:regno',function(req,res){
	var regno = req.params.regno;
	con.query(`select * from personal where regno=${regno}`, function(err,data){
		if(!(err)){
			console.log("hi")
		}
	})
});
app.post('/editConfirm',function(req,res){
	var regno = parseInt(req.body.regno)
	var name = req.body.name
	var address = req.body.address
	con.connect(function(err){	
					con.query(`update personal set name = '${name}', address = '${address}' where regno = ${regno}`,function(error, results, fields){
						console.log(error)
					});
			});	
	res.redirect('/sucLog');
});
app.get('/delEntry/:d',function(req,res){
		var regno = req.params.d;
		console.log(regno);
	con.connect(function(err){	
					con.query(`delete from personal where regno = ${regno}`,function(error, results, fields){
					});
			});
	res.redirect('/sucLog');
})
app.listen(4001);