function ops(choice){
    var func;
    if(choice==1){
        func=function(a,b){
            console.log("result:"+(a+b))
        }
    }
    if(choice==2){
        func=function(a,b){
            console.log("Result:"+(a-b))
        }
    }    
    return func
}
var f=ops(2);
f(10,5);