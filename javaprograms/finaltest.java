class finaltest{
	public static void main(String XYZ[]){

		int physics;
		int chemistry;
		int maths;
		int total=0;
		float pct=0f;

		physics=70;
		chemistry=80;
		maths=90;

		total=physics+chemistry+maths;
		pct=(total*100)/450;

		if(pct>=30){
			System.out.println(total);
			System.out.println(pct);
			System.out.println("You have passed the exam");
		}
		else {
			System.out.println("You have failed the exam");
		}
	}
}
