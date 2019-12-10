module.exports=

function funcTimes(T, a, r, res){
   for (var i = a; i <= r; i++) {
       res.write(T + " x " + i + " = " + (T * i));
       res.write("<br>");
   }
   res.end();
}