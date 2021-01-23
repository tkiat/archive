//O(n)
int factorial(int n){
	fac = 1;
	for(int i = 1; i <= n; i++){
		fac *= i;
	}
	return fac;
}

//recursive (slow)
int factorial(int n){
    if(n > 1)
        return n * factorial(n - 1);
    else
        return 1;
}
