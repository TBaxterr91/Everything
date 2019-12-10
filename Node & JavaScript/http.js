
var http1 = require("http");
var RequestFunction = function(request,response){

                        if (request.url=="/home"){
                            console.log("homepage");
                        }
                        if(request.url=="/pictures"){
                            console.log("picture page");
                        }
                    }
