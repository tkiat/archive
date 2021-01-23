int Fn_modm(long long n, long long m) {
    if (n <= 1)
        return n;

    long long previous = 0;
    long long current  = 1;

    for (long long i = 0; i < n - 1; i++) {
        long long tmp_previous = previous;
        previous = current;
        current = (tmp_previous + current) % m;
        //Fn mod m is periodic starting with 01 for all m
        if(previous == 0 && current == 1){
            int period = i+1;
            while(n - i -2 > period){
                n -= period;
            }
        }
    }
    return current;
}