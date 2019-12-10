
var words = []
var check = 0
function checkwords(word) {
    check = 0
    for(var i=0; i<words.length; i++) {
        if(words[i] == word) {
        check++
        }
    }
    if(check == 0) {
        words.push(word)
        return word + " "
    }
    else return ""
}
var message = "shafeeq is back is shafeeq no no"
alpha = "";
endmessage = ""
string = ""
for(var i=0; i<message.length; i++) {
    if(message.substring(i,i+1) == " ") {
        endmessage= endmessage + checkwords(string)
        string = ""
    }
    else {
        string+=message.substring(i,i+1)
    }
}
console.log(endmessage + checkwords(string))