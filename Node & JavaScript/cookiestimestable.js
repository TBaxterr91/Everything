var express = require('express');
var cookieparser = require('cookie-parser');
var app = express();
app.use(cookieparser());
var reDirect1 = function(req,res){
    res.redirect("/");
}
var funcSelect1 = function (req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    var first =req.cookies.first;
    res.write("Please select what times table you would like");
        res.write("<br> <br>")
    for(var i=1;i<=10;i++){
        res.write(`<a href='http://localhost:4001/selectEnd/${i*10}'>${i*10} </a>`);
        res.write("<br> <br>")
        
    }
    res.end();
}
var funcSelect2 = function (req,res,number){
    res.writeHead(200,{'content-Type':'text/html'});
    res.write("Please select end");
    res.write("<br> <br>")
    res.write("<br> <br>")
    for(var i=number;i<=100;i+=10){
        res.write(`<a href='http://localhost:4001/showTimes/${i}'>${i} </a>`);
        res.write("<br> <br>")
        
    }
    res.end();
}
app.get('/',(req,res)=>{
        res.writeHead(200,{'content-Type':'text/html'});
        res.write("Please select the time of your table");
        res.write("<br> <br>")
        for(var i=1;i<=10;i++){
            res.write(`<a href='http://localhost:4001/selectStart/${i}'>${i} </a>`);
            res.write("<br> <br>")
        
    }
    res.end();
})
app.get(['/selectStart/:f?','/selectStart'],(req,res)=>{
    var f1 = parseInt(req.params.f);
        if(!isNaN(f1) && f1!=null){
            res.cookie("first",f1);
        }
        else {
            res.redirect("http://localhost:4001/");}
    funcSelect1(req,res);
})
app.get(['/selectEnd/:f2?','/selectEnd'],(req,res)=>{
    var f2 = parseInt(req.params.f2);
    if(!isNaN(f2) && f2!=null){
        res.cookie("second",f2);
            if(f2==100){
                res.redirect(`http://localhost:4001/showTimes/${f2}`)
            }
            
        }
        else {
            res.redirect("http://localhost:4001/");}
    
    funcSelect2(req,res,f2);
})
app.get('/showTimes/:f3?',(req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'});
    var end = parseInt(req.params.f3);
    var number = req.cookies.first;
    var start = req.cookies.second;
    for(var i=start;i<=end;i++){
        res.write(number + " * " + i + " = " + (number*i));
        res.write("<br>")
        
    }
    res.end();
})
app.listen(4001);