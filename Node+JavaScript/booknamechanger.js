var FS = require("fs");
var F2 = FS.createWriteStream("hobbit1.txt");
var F = FS.createReadStream("newhobbit.txt", {encoding:'UTF-8'});
​
F.on("data", function(text){
    for(var i = 0; i <= text.length; i++){
        //between i and i+n, where n is length of name to change
        if(text.substring(i, i+5)=="Bilbo"){
            F2.write("ThomasTommyTomTom");
            //i = i + n
            i=i+4;
        }
        else if(text.substring(i, i+6)=="Thorin"){
            F2.write("JosephJoeyJoeJoe");
            i=i+2;
        }
        else if(text.substring(i, i+7)=="Gandalf"){
            F2.write("SamuelSammySamSam");
            i=i+6;
        }
        else if(text.substring(i, i+6)=="Dwalin"){
            F2.write("JoshuaJoshyJoshJosh");
            i=i+5;
        }
        else{
            F2.write(text.substring(i, i+1));
        }   
    }     
});
​
F.on("end", function(){
    console.log("File processed successfully");
});