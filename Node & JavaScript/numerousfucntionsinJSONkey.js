

class Data {

constructor(){
	this.record={
		"Training" : [
				function(){
					console.log("Do Stuff")
				},
				function(){
					console.log("Screens down")
				},
				function(){
					console.log("Few Breaks")
				}
			]
			}
		this.record2={
			"Work" : [
				function(){
					console.log("Workkkk")
				},
				function(){
					console.log("Workkkkghghghghghghghn")
				},
				function(){
					console.log("4pm finish?")
				}
			]
		}
	}
	adding(Key1, ValueFunction){
		this.record[Key1].push(ValueFunction);
	}
}


var Ref = new Data();
Ref.adding("Training", function(){
		console.log("Hello 1");
})

Ref.adding("Training", function(){
		console.log("Hello 2");
})

Ref.record["Training"].forEach(function(item){
	item();
})

Ref.record2["Work"].forEach(function(item){
	item();
})