class taxes{
	public static void main(String XYZ[]){

	String name;
	double salary,tax;
	name="peter";
	salary=2000;
	tax=0;
	if (salary>=2000) tax=salary*20/100;
	if (salary<2000) tax=salary*13/100;
	System.out.println(tax);

        }
}
