#include <iostream>
#include <vector>
#include <stack>

using std::vector;
using std::pair;

int dfs_iterative_modified(vector<vector<int> > &adj) {

  int n = adj.size();
  int visited[n] = {0}; //= 1 if visited
  std::stack<int> st;
  
  int cc = 0;
  for(int i = 0; i < n; i++){
    if(visited[i] == 1)
      continue;
    visited[i] = 1;
    st.push(i);
    while(!st.empty()){
      int v = st.top();  //Pop a vertex from stack to visit next
      st.pop();
      //visit all neighbor nodes and mark "visited"
      for(auto it = adj[v].begin(); it != adj[v].end(); it++){
        if(visited[*it] == 0){
          st.push(*it);
          visited[*it] = 1;
        }
      }
    }
    cc++;
  }
  return cc;
}

int main() {
  size_t n, m;
  std::cin >> n >> m;
  vector<vector<int> > adj(n, vector<int>());
  for (size_t i = 0; i < m; i++) {
    int x, y;
    std::cin >> x >> y;
    adj[x - 1].push_back(y - 1);
    adj[y - 1].push_back(x - 1);
  }
  std::cout << dfs_iterative_modified(adj);
}
