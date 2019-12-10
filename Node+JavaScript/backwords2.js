function reverse(val){
 word = ""
 for(var i=0; i<val.length; i++){
   var char = val.substring(i, i+1);
   word = char+word;
 }
 return word;
}


var name = "shafeeq    is back";
name = name + " ";
var word = "";
var newword = "";
for(var i=0; i<name.length; i++){
 var char = name.substring(i, i+1);
 if(char!=" "){
   word=word+char;
 } else {
   if(word != ""){
     newword = newword + reverse(word) + " ";
     word = "";
   }
 }
}
newword = newword + reverse(word);
console.log(newword);