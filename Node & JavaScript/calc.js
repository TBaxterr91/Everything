
function Maths(F,A,B){
F(A,B);
}



var F1 = function(A,B){
	var Result=A+B;
	console.log("Result:" + Result)
}

var F2 = function(A,B){
	var Result=A-B;
	console.log("Result:" + Result)
}

var F3 = function(A,B){
	var Result=A*B;
	console.log("Result:" + Result)
}

var F4 = function(A,B){
	var Result=A/B;
	console.log("Result:" + Result)
}

Maths(F1,5,5)