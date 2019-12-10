var express=require("express")
var app=express();


app.get('/example/a', function (req,res) {
	res.send('Hello from A!')
})

app.get('/example/b', function (req, res, next) {
	console.log('the response will be sent by the "next" function')
	next() },
	function (req,res) {
	res.send('Hello from B!')
})

app.get('/example/c', function (req, res, next) {
	console.log('the response will be sent by the "next" function')
	next() },
	function (req,res) {
	res.send('Hello from C!')
})

app.listen(8000)