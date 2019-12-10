class Data {
	constructor(){
	this.record ={
	"Reg" : "24",
	"Name"   : "Tom",
	"Emails"  :  ["Email1","Email2","Email3"]
		}
    }
}


var Ref = new Data();
console.log(Ref.record["Reg"]);		// - Search for the Key and it will return the Value
console.log(Ref.record["Name"]);
Ref.record["Emails"].forEach(function(item){       // - Searches for each of the items within the
	console.log(item);							// - EMails section for each Value and prints each one in turn
});

