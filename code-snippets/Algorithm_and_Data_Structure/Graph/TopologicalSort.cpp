#include <iostream>
#include <algorithm>
#include <vector>
#include <stack>

using std::vector;
using std::pair;

void dfs_sub_recursive(vector<vector<int> > &adj, vector<int> &visited, vector<int> &order, int u) {
  visited[u] = 1;
  for (vector <int>::iterator v = adj[u].begin(); v != adj[u].end(); v++){
    if (visited[*v] == 0)
      //recursive
      dfs_sub_recursive(adj, visited, order, *v);
  }
  //if all child nodes of u are visited, insert u last
  order.insert(order.begin(), u);
}
vector<int> toposort(vector<vector<int> > adj) {

  int n = adj.size();
  vector<int> visited(n, 0);
  vector<int> order;
  //dfs
  for (int u = 0; u < n; u++)
    if (visited[u] == 0)
      dfs_sub_recursive(adj, visited, order, u);

  return order;
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
  vector<int> order = toposort(adj);
  for (size_t i = 0; i < order.size(); i++) {
    std::cout << order[i] + 1 << " ";
  }
}
/*
Input
4 3
1 2
4 1
3 1
Output
4 3 1 2
*/