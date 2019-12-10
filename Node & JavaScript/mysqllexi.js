
var mysql = require("mysql")
var http = require('http')
var url = require('url')
var con = mysql.createConnection( {
    "host":"localhost",
    "user":"root",
    "password":"root",
    "database":"DinoTracker"
})
var RequestFunction = function(request, response) {
    var urldata = url.parse(request.url, true)
    response.writeHead(200, {'content-type':'text/html'})
    con.connect(function(abc) {
        con.query("Select * from names", function(err, result, fields) {
            result.forEach(function(item) {
                if(request.url == '/') {
                    response.write('<A href = "http://localhost:4001/Name?N='+item.Name+'">'+item.ID+" "+item.Name+'</A>')
                    response.write('<BR>')
                }
            })
        })
        if(urldata.pathname == '/Name') {
            con.query("Select * from names where Name = '"+urldata.query.N+"'", function(err, result, fields) {
                response.write("Details")
                response.write('<BR>')
                result.forEach(function(item) {
                    response.write("Postcode: " + item.Postcode)
                    response.write('<BR>')
                })
            })
            con.query("Select * from accounts where ID = (Select ID from names where Name = '"+urldata.query.N+"')", function(err, result, fields) {
                response.write('<BR>')
                response.write("Account Details")
                response.write('<BR>')
                result.forEach(function(item) {
                    response.write("Date: " + item.Date)
                    response.write("<BR>")
                    response.write("Salary: " + item.Salary)
                    response.write('<BR>')
                })
            })
            con.query("Select sum(Salary) as Total from accounts where ID = (Select ID from names where Name = '"+urldata.query.N+"')", function(err, result, fields) {
                result.forEach(function(item) {
                    response.write("Total Salary: " + item.Total)
                })
            })
        }
    })
}
var server = http.createServer(RequestFunction)
server.listen(4001)