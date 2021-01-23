#include <iostream>
#include <vector>
#include <stack>

using std::vector;
using std::pair;

//Result: Max time used: 0.01/1.00, max memory used: 7942144/536870912
int dfs_iterative(vector<vector<int> > &adj, int x) {

  int n = adj.size();
  int visited[n] = {0}; //= 1 if visited

  std::stack<int> st;
  st.push(x);
  visited[x] = 1;
  
  while(!st.empty()){
    int v = st.top();  //Pop a vertex from stack to visit next
    st.pop();
    //visit all neighbor nodes and mark "visited"
    for(auto it = adj[v].begin(); it != adj[v].end(); it++){
      if(visited[*it] == 0){
        st.push(*it);
        visited[*it] = 1;
      }
      if(*it == x && visited[*it] == 1)//if discover x again
        return 1;
    }
  }
  return 0;
}

int acyclic(vector<vector<int> > &adj) {

  int n = adj.size();
  for(int i = 0; i < n; i++){
    if(dfs_iterative(adj, i) == 1)
      return 1;
  }
  return 0;
}

int main() {
  size_t n, m;
  std::cin >> n >> m;
  vector<vector<int> > adj(n, vector<int>());
  for (size_t i = 0; i < m; i++) {
    int x, y;
    std::cin >> x >> y;
    adj[x - 1].push_back(y - 1);
  }
  std::cout << acyclic(adj);
}
