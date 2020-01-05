
class Consulting{
public static void main(String[] args) {
int Num1, Num2;
float result=0;
String sign;


try{
Num1=Integer.parseInt(args[0]);
Num2=Integer.parseInt(args[2]);
sign=args[1];

if(sign.equals("+")){
	result=Num1+Num2;
}
if(sign.equals("-")){
	result=Num1-Num2;
}
if(sign.equals("/")){
	result=Num1/Num2;
}
if(sign.equals("*")){
	result=Num1*Num2;
}

System.out.println("Result: " + result);

}
catch(ArithmeticException x){
	System.out.println("Please Dont Divide by 0");
}
catch(NumberFormatException x){
	System.out.println("Please use Numbers");
}




}
}