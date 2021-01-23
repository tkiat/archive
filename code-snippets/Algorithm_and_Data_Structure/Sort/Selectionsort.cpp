#include <iostream>
#include <vector>
#include <utility>

using std::vector;

//i = 0
//select the lowest element and bring it to position i
//i++
//sort in ascending order
void selectionSort(vector<int> &vec){
  
  auto n = vec.size();
  for(int i = 0; i < n; i++){
    int min = i;
    for(int j = i+1; j < n; j++){
      if(vec[j] < vec[min])
        min = j;
    }
    std::swap(vec[i], vec[min]);
  }
}

int main(){

  vector<int> a = {4,7,5,2,1};
  selectionSort(a);

  for(const int &i : a)
    std::cout << i << " ";

  return 0;
}