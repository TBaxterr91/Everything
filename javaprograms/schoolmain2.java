class school{
	private int physics, chemistry, maths;
	private int invalid;

	public void physics(int abc){
	if(abc>=0 & abc<=150){
		physics=abc;
	}
	else {System.out.println("Invalid Phys Marks");
	invalid=1;
	}
	if(abc<=60) System.out.println("You have failed Physics");
	else {System.out.println("You have passed Physics");
	}
}

public void chemistry(int def){
	if(def>=0 & def<=150){
		chemistry=def;
	}
	else {System.out.println("Invalid Chem Marks");
	invalid=1;
	}
	if(def<=60) System.out.println("You have failed Chemistry");
		else {System.out.println("You have passed Chemistry");
	}
}

public void maths(int ghk){
	if(ghk>=0 & ghk<=150){
		maths=ghk;
	}
	else {System.out.println("Invalid maths Marks");
	invalid=1;
	}
	if(ghk<=60) System.out.println("You have failed Maths");
	else {System.out.println("You have passed Maths");
	}
}
	public void showresults(){
		int total=0;
		float per=0;
	if(invalid==0){
		total=(physics+chemistry+maths);
		System.out.println("Total: " + total);}
		else System.out.println("Invalid mark received");
	}


	}


class schoolmain2{
public static void main(String xyz[]){

school james =new school( );
james.physics(100);
james.chemistry(40);
james.maths(40);
james.showresults();

}
}
