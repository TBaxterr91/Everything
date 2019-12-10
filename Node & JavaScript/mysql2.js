var mysql=require("mysql");
var http1 = require("http");
var myurl = require("url");
var con = mysql.createConnection({
   "host":"localhost",
   "user":"root",
   "password":"root",
   "database":"DinoTracker"
});
var Process = function (req, res){
   res.writeHead(200, {'Content-Type':'Text/html'});
   var urldata = myurl.parse(req.url, true);
   if(urldata.pathname=="/"){
           res.write("<H1><U>Students</U></H1>");
           res.write("<BR>");
           con.connect(function(abc){
           con.query("select * from StudentNum",
           function(err,Results,Fields){
               Results.forEach(function(item){
                   res.write("<H2>"+item.SNo+" : ");
                 res.write("<A href='http://localhost:4001/StudentNumber?SNo="+item.SNo+"'>"+ item.Name+"</A></H2>");
                 res.write("<BR>");
               })
               res.end();
           })
       })
   }
   if(urldata.pathname=='/StudentNumber'){
       var number=parseInt(urldata.query.SNo);
       con.connect(function(abc){
           con.query("select * from personal where SNo="+number,
           function(err,Results,Fields){
               Results.forEach(function(item){
               res.write(item.SNo+" - "+item.Name+" : "+item.Address);
       })
       res.end();
   })
})
}
}
var server = http1.createServer(Process);
server.listen(4001);