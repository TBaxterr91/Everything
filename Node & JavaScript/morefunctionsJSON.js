

class Data {
	constructor(){
	this.record ={
	"regno" : "24",
	"name" : "Tom"
    }
}



adding(Key1, Value1){
	this.record[Key1]=Value1;		// This pulls through the above Key and Value
}
}

var Ref = new Data();
Ref.record.regno=100;  			// Changes the value of regno to 100
console.log(Ref.record.regno);
console.log(Ref.record.name);


