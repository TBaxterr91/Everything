
var express=require("express")
var bodyparser=require("body-parser")
var mongo = require('mongodb').MongoClient;
var app=express()

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));
let url="mongodb://localhost:27017"

app.get("/showall",function(req,res){
    mongo.connect('mongodb://localhost:27017', function (err, client) {
      if (err) throw err;
      var db = client.db('School');
      db.collection("School").find().toArray(function(err, result) {
        if (err) throw err;
        res.send(result);
      });
      });
    });

app.post("/post-data", function(req,res){
    console.log("hello")
    let data={
        regno:req.body.regno,
        name:req.body.name,
    }
    mongo.connect(url,function(err,client){
        if(err){
            console.log(err)
        }else{
            database=client.db("School")
            database.collection("School").insertOne(data,function(error,result){
                if(error){
                    console.log(error)
                }
            })
        }
    })
})
app.listen(2000);