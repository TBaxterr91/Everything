function add(){
    var result=0;
    for (var i=0; i<arguments.length;i++){
        result+=arguments[i];
    }
    return result;
}
console.log(add(2,2,2,2,2));
console.log(add(1,2,3,4,5));