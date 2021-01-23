#include <iostream>
#include <vector>
#include <utility>

using std::vector;

//i = 0
//traverse from i to end
//during traversal select two unsorted element and swap them
//i++
//sort in ascending order
void insertionSort(vector<int> &vec){
  
  auto n = vec.size();
  for(int i = 0; i < n; i++){
    int j = i;
    while(j > 0 && vec[j] < vec[j-1]){
      std::swap(vec[j], vec[j-1]);
      --j;
    }
  }
}

int main(){

  vector<int> a = {4,7,5,2,1};
  insertionSort(a);

  for(const int &i : a)
    std::cout << i << " ";

  return 0;
}