#include <iostream>
#include <math.h>

//fast exponentiation using divide and conquer alg.
double power(double a, int n){
  if(n == 0)
    return 1;
  double x = power(a, floor(n/2));
  //if n is even integer
  if(n % 2 == 0)
    return pow(x, 2);
  else
    return a*pow(x, 2);
}

int main(){

  std::cout << power(3.3, 3);
  return 0;
}

/*
//iterative
int binaryExponentiation(int x,int n)
{
    int result=1;
    while(n>0)
    {
        if(n % 2 ==1)
            result=result * x;
        x=x*x;
        n=n/2;
    }
    return result;
}
*/