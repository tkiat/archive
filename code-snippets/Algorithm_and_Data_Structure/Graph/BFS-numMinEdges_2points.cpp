#include <iostream>
#include <vector>
#include <queue>
#include <climits>

using std::vector;
using std::queue;

//Result: Max time used: 0.82/2.00, max memory used: 42733568/536870912

//All edges here are of length 1
vector<int> reconstructPath(int prev[], int source, int dest){
  vector<int> result;
  while(dest != source){
    result.insert(result.begin(), dest);
    dest = prev[dest];
    if(dest == INT_MIN){  //= dest and source are on different graphs
      result = vector<int>();
      result.push_back(-1);
      break;
    }
  }
  return result;
}
int BFS_minNumEdges(vector<vector<int> > &adj, int s, int t) {

  int n = adj.size();
  int dist[n];
  int prev[n];  //prev[i] = previous node before i
  std::fill_n(dist, n, INT_MAX); //equivalent to visited = 0
  std::fill_n(prev, n, INT_MIN);
  queue<int> q;
  q.push(s);
  dist[s] = 0;
  prev[s] = -1;
  while(!q.empty()){
    int u = q.front();
    q.pop();
    for(auto v = adj[u].begin(); v != adj[u].end(); v++){
      if(dist[*v] == INT_MAX){
        q.push(*v);
        dist[*v] = dist[u] + 1;
        prev[*v] = u;
      }
    }
  }
  int numEdges;
  vector<int> result = reconstructPath(prev, s, t);
  if(result.size() > 0 && result[0] == -1)
    numEdges = -1;
  else
    numEdges = result.size();

  return numEdges;
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
  int s, t;
  std::cin >> s >> t;
  std::cout << BFS_minNumEdges(adj, s - 1, t - 1);
}
