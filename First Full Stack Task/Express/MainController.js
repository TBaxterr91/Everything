var express = require('express');
var cookieparser = require('cookie-parser');
var session = require('express-session');
var mysql = require("./mysqlconnection.js");
var con = mysql();
var bodyParser = require('body-parser');
var cors = require('cors')
var App = express();
App.use(cors());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended:true}));
App.use(cookieparser());
App.use(session({secret:"slipperly secret snake"}));


app.post('/loginCheck',function(req,res){
    var un = req.body.Username
    var ps = req.body.Password
		con.connect(function(err){	
					con.query(`select username, password, role from users where username ='${un}' and password = '${ps}'`,function(error, results, fields){
						if(results.length<1){
							res.redirect("http://localhost:4001")
							console.log("User Does Not Exist")
						}
						else {
							req.session.role=results[0].role;
							req.session.user=un;
							req.session.pass=ps;
							res.redirect("/Loggedin")
							}							
					});
			});
	});
//homepage once succesfully logged in
app.get('/Loggedin',function(req,res){
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
         res.redirect('/Homepage');
     }
  });
})
//create a new user or admin
app.post('/Createuser',function(req,res){
	var role = req.body.Role;
	var user = req.body.Username;
	var pass = req.body.Password;
	var name = req.body.Name;

			con.connect(function(err){	
					con.query(`insert into users values('${role}',${user},'${pass}','${name}')`,function(error, results, fields){
						console.log(error)
					});
			});	
});

app.get('/editConfirm/:empno',function(req,res){
	var empno = req.params.empno;
	con.query(`select * from employees where empno=${empno}`, function(err,data){
		if(!(err)){
			console.log("hi")
		}
	})
});

app.post('/editConfirm',function(req,res){
	var empno = parseInt(req.body.empno)
	var name = req.body.name
	var address = req.body.address
	con.connect(function(err){	
					con.query(`update employees set name = '${name}', address = '${address}' where regno = ${empno}`,function(error, results, fields){
						console.log(error)
					});
			});	
	res.redirect('/Loggedin');
});

app.get('/delEntry/:d',function(req,res){
		var empno = req.params.d;
		console.log(empno);
	con.connect(function(err){	
					con.query(`delete from employees where empno = ${empno}`,function(error, results, fields){
					});
			});
	res.redirect('/Loggedin');
})

app.listen(4001);



