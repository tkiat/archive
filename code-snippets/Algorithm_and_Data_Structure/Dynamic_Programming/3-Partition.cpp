#include <iostream>
#include <vector>

using std::vector;

bool isPartition3(vector<int> &arr){

  int n = arr.size();
  //Step 1: Compute sum and perform preliminary check to save time
  //(total sum must % 3 = 0 and no element is greater than average)
  int sum = 0;
  for (int i = 0; i < n; i++)
    sum += arr[i];
  if(sum % 3 != 0)
    return false;
  for(int i = 0; i < n; i++)
    if(arr[i] > sum/3)
      return false;
  //Step 2: Find result using dynamic programming
  //DP[k][i][j] = if we can use the first k elements to get i and j values
  bool DP[n+1][sum/3+1][sum/3+1];
  
  for (int k = 0; k <= n; k++){
    for (int i = 0; i <= sum/3; i++){
      for (int j = 0; j <= sum/3; j++){
        
        if(i == 0 && j == 0){
          DP[k][i][j] = true; //just dont use any element to get i and j = 0
        }
        else if (k == 0){
          DP[k][i][j] = false; //we cannot use 0 element to get value i and j > 0
        }
        else{
          //3 cases that makes DP[k][x] = 1
          //1st: k-1 elements can yield i and j, this means k elements also do
          //2nd: k-1 elements can yield i - value of kth item, this means 
          //we can add kth item to get i
          //3rd: k-1 elements can yield j - value of kth item, this means 
          //we can add kth item to get j
          DP[k][i][j] = DP[k-1][i][j];
          if(i >= arr[k-1])
            DP[k][i][j] = DP[k][i][j] || DP[k-1][i-arr[k-1]][j];
          if(j >= arr[k-1])
            DP[k][i][j] = DP[k][i][j] || DP[k-1][i][j-arr[k-1]];
        }
      }
    }
  }
  return DP[n][sum/3][sum/3];
}

int main() {
  int n;
  std::cin >> n;
  vector<int> A(n);
  for (size_t i = 0; i < A.size(); ++i) {
    std::cin >> A[i];
  }
  std::cout << isPartition3(A) << '\n';
}
