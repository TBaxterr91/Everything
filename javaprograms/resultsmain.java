class results{
	int phy, che, mat;
	public void showresults(){
		
	int total;
	total=phy+che+mat;
	System.out.println("Result is:"+total);
	
	}
}

class resultsmain{
public static void main(String xyz[]){

results peter, smith;
peter= new results();
smith= new results();
peter.phy=50; peter.che=75; peter.mat=100;
smith.phy=10; smith.che=20;  smith.mat=30;
peter.showresults();
System.out.println("These are Peter's results");
System.out.println("Peter's detailed results are: " + "Phy:" + peter.phy + " Che: " + peter.che + " Mat:" + peter.mat);
smith.showresults();
System.out.println("These are Smith's results");



}

}