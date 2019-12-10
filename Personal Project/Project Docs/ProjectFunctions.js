

function addnewdino(){
	var Refadd= document.getElementById("addnewdinomenu");
	Refadd.style.visibility="visible";
	var Refupdate= document.getElementById("updatedinomenu");
	Refupdate.style.visibility="hidden";
	var Refdelete= document.getElementById("deletedinomenu");
	Refdelete.style.visibility="hidden";
	var MenuUpdate= document.getElementById("existingdinoMenu");
    MenuUpdate.style.visibility="hidden";
    var Refsound= document.getElementById("soundsMenu");
    Refsound.style.visibility="hidden";
    var Refimage= document.getElementById("imagemenu");
    Refimage.style.visibility="hidden";
	Refadd.style="width:275px;height:260px;border: 1px solid black;border-radius: 25px;position: fixed;background-color:olivedrab;position:absolute;top:125px;left:400px";
}

function updatedino(){
	var Refadd= document.getElementById("addnewdinomenu");
	Refadd.style.visibility="hidden";
	var Refupdate= document.getElementById("updatedinomenu");
	Refupdate.style.visibility="visible";
	var Refdelete= document.getElementById("deletedinomenu");
	Refdelete.style.visibility="hidden";
	var MenuUpdate= document.getElementById("existingdinoMenu");
    MenuUpdate.style.visibility="hidden";
     var Refsound= document.getElementById("soundsMenu");
    Refsound.style.visibility="hidden";
    var Refimage= document.getElementById("imagemenu");
    Refimage.style.visibility="hidden";
	Refupdate.style="width:275px;height:260px;border: 1px solid black;border-radius: 25px;position: fixed;background-color:olivedrab;position:absolute;top:125px;left:400px";
}

function deletedino(){
	var Refadd= document.getElementById("addnewdinomenu");
	Refadd.style.visibility="hidden";
	var Refupdate= document.getElementById("updatedinomenu");
	Refupdate.style.visibility="hidden";
	var Refdelete= document.getElementById("deletedinomenu");
	Refdelete.style.visibility="visible";
	var MenuUpdate= document.getElementById("existingdinoMenu");
    MenuUpdate.style.visibility="hidden";
    var Refsound= document.getElementById("soundsMenu");
    Refsound.style.visibility="hidden";
    var Refimage= document.getElementById("imagemenu");
    Refimage.style.visibility="hidden";
	Refdelete.style="width:275px;height:100px;position: fixed;background-color:olivedrab;top: 50%;left: 50%;margin-top: -100px;margin-left: -100px";
}

function soundss(){
	var Refadd= document.getElementById("addnewdinomenu");
	Refadd.style.visibility="hidden";
	var Refupdate= document.getElementById("updatedinomenu");
	Refupdate.style.visibility="hidden";
	var Refdelete= document.getElementById("deletedinomenu");
	Refdelete.style.visibility="hidden";
	var MenuUpdate= document.getElementById("existingdinoMenu");
    MenuUpdate.style.visibility="hidden";
    var Refsound= document.getElementById("soundsMenu");
    Refsound.style.visibility="visible";
    var Refimage= document.getElementById("imagemenu");
    Refimage.style.visibility="hidden";
	Refsound.style="width:275px;height:260px;border: 1px solid black;border-radius: 25px;position: fixed;background-color:olivedrab;position:absolute;top:125px;left:400px";
}

function imagedino(){
	var Refadd= document.getElementById("addnewdinomenu");
	Refadd.style.visibility="hidden";
	var Refupdate= document.getElementById("updatedinomenu");
	Refupdate.style.visibility="hidden";
	var Refdelete= document.getElementById("deletedinomenu");
	Refdelete.style.visibility="hidden";
	var MenuUpdate= document.getElementById("existingdinoMenu");
    MenuUpdate.style.visibility="hidden";
    var Refsound= document.getElementById("soundsMenu");
    Refsound.style.visibility="hidden";
    var Refimage= document.getElementById("imagemenu");
    Refimage.style.visibility="visible";
	Refimage.style="width:275px;height:260px;border: 1px solid black;border-radius: 25px;position: fixed;background-color:olivedrab;position:absolute;top:125px;left:400px";
}


function closeMenu(){
    var MenuAdd= document.getElementById("addnewdinomenu");
    MenuAdd.style.visibility="hidden";
    var MenuUpdate= document.getElementById("updatedinomenu");
    MenuUpdate.style.visibility="hidden";
    var MenuDel= document.getElementById("deletedinomenu");
    MenuDel.style.visibility="hidden";
    var MenuUpdate= document.getElementById("existingdinoMenu");
    MenuUpdate.style.visibility="hidden";
    var Refsound= document.getElementById("soundsMenu");
    Refsound.style.visibility="hidden";
    var Refimage= document.getElementById("imagemenu");
    Refsound.style.visibility="hidden";
}

function exitMenu(){
    var MenuAdd= document.getElementById("addnewdinomenu");
    MenuAdd.style.visibility="hidden";
    var MenuUpdate= document.getElementById("updatedinomenu");
    MenuUpdate.style.visibility="hidden";
    var MenuDel= document.getElementById("deletedinomenu");
    MenuDel.style.visibility="hidden";
    var MenuUpdate= document.getElementById("existingdinoMenu");
    MenuUpdate.style.visibility="hidden";
     var Refsound= document.getElementById("soundsMenu");
    Refsound.style.visibility="hidden";
    var Refimage= document.getElementById("imagemenu");
    Refsound.style.visibility="hidden";
    location.reload(true);
}

function cleartextonclick(id){

 id.value = "";
	
 }


function checkvalues(){
	var atxt1 = document.getElementById("a1");
	var atxt2 = document.getElementById("a2");
	var atxt3 = document.getElementById("a3");
	var atxt4 = document.getElementById("a4");
	var atxt5 = document.getElementById("a5");

	if(atxt1.value==""){
	alert("Nickname field not completed correctly");
	return false;
	}

	else if(atxt2.value==""){
	alert("Diet field not completed correctly");
	return false;
	}

	else if(atxt3.value==""){
	alert("Lifespan field not completed correctly");
	return false;
	}

	else if(atxt4.value==""){
	alert("Species field not completed correctly");
	return false;
	}

	else if(atxt5.value==""){
	alert("Strength field not completed correctly");
	return false;
	}

	else {alert ("Submission Successful");
		location.reload(true);}
	}

function checkvalues2(){
	
	var utxt1 = document.getElementById("u1");
	var utxt2 = document.getElementById("u2");
	var utxt3 = document.getElementById("u3");
	var utxt4 = document.getElementById("u4");
	var utxt5 = document.getElementById("u5");

	
	if(utxt1.value==""){
	alert("Nickname field not completed correctly");
	return false;
	}

	else if(utxt2.value==""){
	alert("Diet field not completed correctly");
	return false;
	}

	else if(utxt3.value==""){
	alert("Lifespan field not completed correctly");
	return false;
	}

	else if(utxt4.value==""){
	alert("Species field not completed correctly");
	return false;
	}

	else if(utxt5.value==""){
	alert("Strength field not completed correctly");
	return false;
	}

	else {alert ("Submission Successful");
		location.reload(true);}
	}

function getexistingdinos(){
 console.log("helloo");
 var MenuUpdate= document.getElementById("existingdinoMenu");
 MenuUpdate.style.visibility="visible";
 var MenuAdd= document.getElementById("addnewdinomenu");
 MenuAdd.style.visibility="hidden";
 var MenuUpdate= document.getElementById("updatedinomenu");
 MenuUpdate.style.visibility="hidden";
 var MenuDel= document.getElementById("deletedinomenu");
 MenuDel.style.visibility="hidden";
 var Refsound= document.getElementById("soundsMenu");
 Refsound.style.visibility="hidden";
 var Refimage= document.getElementById("imagemenu");
 Refimage.style.visibility="hidden";
 const Http = new XMLHttpRequest();
 const url='http://'+location.host+':9100/ShowAll';
 Http.open("GET", url);
 Http.onreadystatechange = function(e){
	if (Http.readyState==4){
	data=JSON.parse(Http.responseText);
	data.forEach(function(item){
		var nickname=document.createElement("td");
		var diet=document.createElement("td");
		var lifespan=document.createElement("td");
		var species=document.createElement("td");
		var strength=document.createElement("td");
		var buttonCell = document.createElement("td");
		nickname.innerHTML=item.nickname;
		diet.innerHTML=item.diet;
		lifespan.innerHTML=item.lifespan;
		species.innerHTML=item.species;
		strength.innerHTML=item.strength;

		let button = document.createElement("button");
       button.innerHTML= "X";
       button.type="button";
       button.className = "btn tableDel"
       button.addEventListener("click", function() {
           deleteData(item.id);
       });
       buttonCell.appendChild(button);
		var dinoTable = document.getElementById("dinoTable");
		var dinoRow=document.createElement("tr");
		
		dinoRow.appendChild(nickname);
		dinoRow.appendChild(diet);
		dinoRow.appendChild(lifespan);
		dinoRow.appendChild(species);
		dinoRow.appendChild(strength);
		dinoRow.appendChild(buttonCell);
		dinoTable.appendChild(dinoRow);

	});
 }
 }
 Http.send();
 }





// JONS WAY BELOW
function addnewdino2() {
	var nickname = document.getElementById('a1').value;
	var diet = document.getElementById('a2').value;
	var lifespan = document.getElementById('a3').value;
	var species = document.getElementById('a4').value;
	var strength = document.getElementById('a5').value;
	var dinosaur = new Object();
	dinosaur.nickname = nickname;
	dinosaur.diet = diet;
	dinosaur.lifespan = lifespan;
	dinosaur.species = species;
	dinosaur.strength = strength;
	var dinosaurJSON = JSON.stringify(dinosaur);
	$.ajax({
		type : "POST",
		url : 'http://'+location.host+':9100/newDinosaur',
		contentType : "application/json",
		data : dinosaurJSON,
		success : function(dinosaur) {
			console.log(data);
		},
		error : function(dinosaur) {
			console.log(data);
		},
		dataType : 'json'
	});
	   playrexroar();
	   // location.reload(true);

}

   


function deleteData(id){
    var Http= new XMLHttpRequest();
    Http.open("DELETE", 'http://'+location.host+':9100/deleteDino/' + id);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.onload= function(){
    getexistingdinos();
    location.reload(true);
        }
        
        Http.send();
        
        return false;
}

function updatedino2() {
	var nickname = document.getElementById('u1').value;
	var diet = document.getElementById('u2').value;
	var lifespan = document.getElementById('u3').value;
	var species = document.getElementById('u4').value;
	var strength = document.getElementById('u5').value;
	var dinosaur = new Object();
	dinosaur.nickname = nickname;
	dinosaur.diet = diet;
	dinosaur.lifespan = lifespan;
	dinosaur.species = species;
	dinosaur.strength = strength;
	var dinosaurJSON = JSON.stringify(dinosaur);
	$.ajax({
		type : "PUT",
		url : 'http://'+location.host+':9100/updateDinosaur',
		contentType : "application/json",
		data : dinosaurJSON,
		success : function(dinosaur) {
			console.log(data);
		},
		error : function(dinosaur) {
			console.log(data);
		},
		dataType : 'json'
	});
	   playrexroar();
	   location.reload(true);
}


function playrexroar(){
       var audio = document.getElementById("rexroar");
       audio.play();
                 }

function playpteraroar (){
       var audio = document.getElementById("pteraroar");
       audio.play();
                 }

function playraptorroar(){
       var audio = document.getElementById("raptorroar");
       audio.play();
                 }

function playdragonroar(){
       var audio = document.getElementById("dragonroar");
       audio.play();
                 }                                 

function playtestroar(){
       var audio = document.getElementById("testroar");
       audio.play();
                 }    

function trexpicture(){
 var Trexref= document.getElementById("trexpicture");
	Trexref.style.visibility="visible";
 var Pteraref= document.getElementById("pterapicture");
	Pteraref.style.visibility="hidden";
	var Raptorref= document.getElementById("raptorpicture");
	Raptorref.style.visibility="hidden";
	var Dragonref= document.getElementById("dragonpicture");
	Dragonref.style.visibility="hidden";
                  }

function pterapicture(){
 var Pteraref= document.getElementById("pterapicture");
	Pteraref.style.visibility="visible";
	var Trexref= document.getElementById("trexpicture");
	Trexref.style.visibility="hidden";
	var Raptorref= document.getElementById("raptorpicture");
	Raptorref.style.visibility="hidden";
	var Dragonref= document.getElementById("dragonpicture");
	Dragonref.style.visibility="hidden";
				}

function raptorpicture(){
 var Raptorref= document.getElementById("raptorpicture");
	Raptorref.style.visibility="visible";
	var Trexref= document.getElementById("trexpicture");
	Trexref.style.visibility="hidden";
	var Pteraref= document.getElementById("pterapicture");
	Pteraref.style.visibility="hidden";
	var Dragonref= document.getElementById("dragonpicture");
	Dragonref.style.visibility="hidden";
				}

function dragonpicture(){
var Dragonref= document.getElementById("dragonpicture");
 	Dragonref.style.visibility="visible";
	var Trexref= document.getElementById("trexpicture");
	Trexref.style.visibility="hidden";
	var Pteraref= document.getElementById("pterapicture");
	Pteraref.style.visibility="hidden";
	var Raptorref= document.getElementById("raptorpicture");
	Raptorref.style.visibility="hidden";
	
				}
