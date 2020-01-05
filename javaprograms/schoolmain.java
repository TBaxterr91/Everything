class school{
	private int phy, che, mat;


	public void physics(int abc){
	if(abc>=0 & abc<=150){
		System.out.println("Result Accepted");
	}
	else {System.out.println("Invalid Phys Marks");}
}
}

class schoolmain{
public static void main(String xyz[]){

school james;
james=new school( );
james.physics(70);


}
}
