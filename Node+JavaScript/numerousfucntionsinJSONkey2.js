class Data{
    constructor(){
        this.records = {};
                        
                        
    }
    adding(key1,value){
        if(this.records[key1]==null){
        this.records[key1]=[];
}
        this.records[key1].push(value);
    }
    
    }
var ref = new Data();
var f1 = function study(){
    console.log("study");
        }
var f2 = function breaks(){
    console.log("breaks");
        }
var f3 = function kitchen(){
    console.log("kitchen");
        }
var f4 = function egg(){
    console.log("egg");
        }

ref.adding("funcSet1",f1);
ref.adding("funcSet1",f2);
ref.adding("funcSet1",f3);
ref.adding("funcSet1",f4);
ref.records["funcSet1"].forEach(function(item){
    item();
});