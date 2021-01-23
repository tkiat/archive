//Pseudocode (from Hackerearth)
/*
BFS (G, s)                   //Where G is the graph and s is the source node
    let Q be queue.
    Q.enqueue( s ) //Inserting s in queue until all its neighbour vertices are marked.

    mark s as visited.
    while ( Q is not empty)
        //Removing that vertex from queue,whose neighbour will be visited now
        v  =  Q.dequeue( )

        //processing all the neighbours of v  
        for all neighbours w of v in Graph G
            if w is not visited 
                Q.enqueue( w )             //Stores w in Q to further visit its neighbour
                mark w as visited.
*/

#include <iostream>
#include <vector>
#include <queue>
#include <climits>

using std::vector;
using std::queue;

void BFS(vector<vector<int> > &adj, int s) {

  int n = adj.size();
  int dist[n];
  std::fill_n(dist, n, INT_MAX); //equivalent to visited = 0
  queue<int> q;
  q.push(s);
  dist[s] = 0;
  std::cout << "BFS: ";
  while(!q.empty()){
    int u = q.front();
    std::cout << u << " ";
    q.pop();
    for(auto v = adj[u].begin(); v != adj[u].end(); v++){
        if(dist[*v] == INT_MAX){
            q.push(*v);
            dist[*v] = dist[u] + 1;
        }
    }
  }
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
  int s;
  std::cin >> s;
  BFS(adj, s - 1);
}