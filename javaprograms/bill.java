class bill{
	public static void main(String XYZ[]){

		int bill, paid, balance;

		bill=1;
		paid=300;
		balance=(paid-bill);

		{
			System.out.println("50 = "+(balance/50));
			balance=balance-((balance/50)*50);
		}
			{
				System.out.println("20 = "+(balance/20));
				balance=balance-((balance/20)*20);
			}
				{
					System.out.println("10 = "+(balance/10));
					balance=balance-((balance/10)*10);
				}
					{
						System.out.println("5 = "+(balance/5));
						balance=balance-((balance/5)*5);
					}
						{
							System.out.println("2 = "+(balance/2));
							balance=balance-((balance/2)*2);
						}

	}
}