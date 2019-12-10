var mysql=require("mysql");

module.exports=function connection(){

var con=mysql.createConnection({
	"host":"localhost",
	"user":"root",
	"password":"root",
	"database":"groupproject"
});

con.connect(function(errors){
	if(errors){
		console.log("Error in connection")
	}
	else{
		console.log("database connected");
	}
})
return con;
}