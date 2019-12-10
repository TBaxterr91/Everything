var FS = require("fs")

var F2 = FS.createWriteStream("File2.txt");

var F = new FS.createReadStream("File1.txt",{encoding:'utf8'})
var count = 0;

F.on("data", function(text){
	count+=1;			
	var newData="";
	for(var i=0; i<text.length; i++) {
   	 if(text.substring(i,i+1) == "a") {
     	  newData+="?";
   	 }
   	 else if(text.substring(i,i+1)=="s"){
   		newData+="!";
   		}
   else{
   		newData+=text.substring(i,i+1);
   	 }
   }
   F2.write(newData)
	});


F.on("end", function(text){		
	console.log(count + ".file finished");	
	});