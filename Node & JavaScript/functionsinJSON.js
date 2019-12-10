// - This has functions within the JSON Document, then can call the function(name) and it will execute
// the function (value)

class Data {
	constructor(){
	this.record ={
	"A" : function(){
		console.log("Hello 1")},
	"B"   : function(){
		console.log("Hello 2")},
	"C"  : function(){
		console.log("Hello 3")}
		}
    }
}

var Ref = new Data();
Ref.record["A"]();
Ref.record["B"]();
Ref.record["C"]();


