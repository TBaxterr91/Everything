function Operations(){
	var f = function(){
		console.log("High order functions");
	}
	return f;
}
var myF=Operations();
myF();