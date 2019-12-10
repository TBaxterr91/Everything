
// Below is a Arraylist of Functions - The first has a name msg, the others are anonymous
// fuctions without a name but still execute in the for function

var arrayname=[];
var msg=function(){
	console.log("Hello1");
}

arrayname.push(msg);

arrayname.push( function(){
	console.log("Hello2");
})

arrayname.push( function(){
	console.log("Hello3");
})

for(var i=0;i<arrayname.length;i++){
arrayname[i]();
}


// Below is another example where the function is seperately defined as F, which will allow you
// to reference this function elsewhere without having to write the code


var Numbers = [23,25,93,1,2,3,4,4,5,6,7,];

var F = function(item){
	if(item%2==0){
		console.log(item, "is even");
				}
	else{ 
		console.log(item, "is odd");
		}
		}

Numbers.forEach(F)