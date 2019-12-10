var Name="Shafeeq is back ello hello"
var TotalWords=0

for(var i=0;i<Name.length;i++){
	
	if(Name.substring(i,i+1)==" "){
		TotalWords+=1
	}
}
TotalWords+=1
console.log(TotalWords)