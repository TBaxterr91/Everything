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



App.get('/showall',function(req,res){
			con.connect(function(err){	
					con.query(`select * from employees order by empno`,function(error, results, fields){
							res.send(results);		
					});
			});	
});

App.post('/Createuser',function(req,res){
	var role = req.body.Role;
	var user = req.body.Username;
	var pass = req.body.Password;
	var name = req.body.Name;

			con.connect(function(err){	
					con.query(`insert into users values(${role},'${user}','${pass}','${name}')`,function(error, results, fields){
						console.log(error)

					});
			});	
});

App.post('/Logincheck',function(req,res){
    var un = req.body.Username;
    var ps = req.body.Password;

		con.connect(function(err){	
					con.query(`select Username, Password, Role from users where Username ='${un}' and Password = '${ps}'`,function(error, results, fields){
						
						// res.send(results);

						if(results.length<1){
							res.redirect("http://localhost:4001")
							console.log("User Does Not Exist")
						}
						else {
							res.send(results)
							}							
					});
			});
	});

App.listen(4001);



