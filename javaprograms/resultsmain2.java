class results2{
	int phy, che, mat;
	private float total, per;
	private void docalculations(){
		total=phy+che+mat;
		per=(total*100)/450;

	
	
	}

	public void showresults(){
		docalculations();
	System.out.println("Total Marks: " + total);
	System.out.println("Percentage: " + per);
}
}

class resultsmain2{
public static void main(String xyz[]){

results2 ref;
ref=new results2();
ref.phy=100;
ref.che=50;
ref.mat=100;
ref.showresults();



}

}