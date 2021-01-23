//Euclid Algorithm: O(log(max(a, b)))
int EuclidGCD(int a, int b){
  if (b==0)
    return a;
  a = a % b;
  return EuclidGCD(b, a);
}