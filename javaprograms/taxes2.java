class taxes2{
	public static void main(String XYZ[]){

	String name;
	int salary;
	float tax=0;
	float net=0;

	salary=2100;
	name=("peter");
    if(salary>1500){tax=(salary*21)/100;
    net=(salary-tax);
    System.out.println(salary);
    System.out.println(tax);
    System.out.println(net);}
    else System.out.println("No Tax");
    }
}
