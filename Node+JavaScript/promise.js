
var add = function(a,b){
	return new Promise(function(success,failure){
	if(a!=b){
	var result=a+b;
	success(result);
	}
	else {
		failure("Some error has occured")
	}
	})
}

var P=add(20,3)

P.then(function(res){
	console.log(res)
}, function(Error){
	console.log(Error)
	}
	)
