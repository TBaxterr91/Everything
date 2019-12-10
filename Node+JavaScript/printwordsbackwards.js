var name = "shafeeq is back " ;
var word="";

for(var i=name.length-1;i>=0;i--)
    if(name.substring(i,i+1)==" "){
        console.log(word);
        word="";
    }
    else word=name.substring(i,i+1)+word
    
console.log(word);