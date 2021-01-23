#include <iostream>
#include <vector>
#include <climits>
#include <queue>

using std::vector;
using std::queue;

bool bfs_isBipartite(vector<vector<int> > &adj) {

  int n = adj.size();
  int visited[n]; 
  std::fill_n(dist, n, INT_MAX); //equivalent to visited = 0
  std::fill_n(visited, n, -1);
  queue<int> q;
  int src = 0;
  q.push(src);
  visited[src] = 0; //-1 = unvisited, 0 indicates black, 1 indicate white
  while(!q.empty()){
    int u = q.front();
    q.pop();
    for(auto v = adj[u].begin(); v != adj[u].end(); v++){

      if(visited[*v] == visited[u])//adjacent nodes have same color
        return false;
      if(visited[*v] == -1){
        q.push(*v);
        visited[*v] = 1 - visited[u];
      }
    }
  }
  return true;
}

int main() {
  int n, m;
  std::cin >> n >> m;
  vector<vector<int> > adj(n, vector<int>());
  for (int i = 0; i < m; i++) {
    int x, y;
    std::cin >> x >> y;
    adj[x - 1].push_back(y - 1);
    adj[y - 1].push_back(x - 1);
  }
  std::cout << bfs_isBipartite(adj);
}
