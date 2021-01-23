#include <iostream>
#include <vector>

using std::vector;

bool isPartition2(vector<int> &arr){

  int n = arr.size();
  //Step 1: Compute sum and perform preliminary check to save time
  //(total sum must be even and no element is greater than average)
  int sum = 0;
  for (int i = 0; i < n; i++)
    sum += arr[i];
  if (sum%2 != 0)  
    return false;
  for(int i = 0; i < n; i++)
    if(arr[i] > sum/2)
      return false;

  //Step 2: Find result using dynamic programming
  //DP[k][x] = if we can use the first k elements to get x value
  bool DP[n+1][sum/2+1];

  for (int k = 0; k <= n; k++){
    for (int x = 0; x <= sum/2; x++){
      
      if(x == 0){
        DP[k][x] = true; //just dont use any element to get x = 0
      }
      else if(k == 0 && x != 0){
        DP[k][x] = false; //we cannot use 0 element to get value x > 0
      }
      else{
        //2 cases that makes DP[k][x] = 1
        //1st: k-1 elements can yield x, this means k elements also do
        //2nd: k-1 elements can yield x - value of kth item, this means 
        //we can add kth item to get x
        DP[k][x] = DP[k-1][x]; 
        if (x >= arr[k-1])
          DP[k][x] = DP[k][x] || DP[k-1][x - arr[k-1]];
      }
    }
  }
  return DP[sum/2][n];
}

int main(){
  
  vector<int> arr = {3, 1, 1, 2, 2, 1};
  int n = arr.size();
  if (isPartition2(arr) == true)
    std::cout << "Yes";
  else
    std::cout << "No";
  
  getchar();
  return 0;
}