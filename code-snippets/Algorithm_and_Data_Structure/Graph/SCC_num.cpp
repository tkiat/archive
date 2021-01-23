#include <algorithm>
#include <iostream>
#include <vector>
#include <stack>

using std::vector;
using std::pair;

vector<vector<int>> getReverse(vector<vector<int> > &G);
vector<int> toposort(vector<vector<int> > adj);
void dfs_sub_recursive(vector<vector<int> > &adj, vector<int> &visited, vector<int> &order, int u);
int dfs_iterative(vector<vector<int> > &adj, vector<int> &visited, int u);

//Result: Max time used: 0.03/1.00, max memory used: 11821056/536870912
int num_scc(vector<vector<int> > G) {

  vector<int> scc;
  vector<int> visited(G.size());
  fill(visited.begin(), visited.end(), 0);
  //Step 1: Create reverse graph
  vector<vector<int> > G_rev = getReverse(G);
  //Step 2: DFS-Loop on reverse graph, get order of all nodes
  vector<int> order;
  order = toposort(G_rev); //highest postorder is at index 0 of order
  //Step 3: DFS-Loop on original graph in reversing order
  for(auto it = order.begin(); it != order.end(); it++){

    int numVertices;
    int u = *it;
    if(visited[u] == 0){
      numVertices = dfs_iterative(G, visited, u);
      scc.push_back(numVertices);
    }
  }
  return scc.size();
}
//Step 1
vector<vector<int>> getReverse(vector<vector<int> > &G){

	int G_size = G.size();
	vector<vector<int>> G_rev(G_size);

	for (int i = 0; i < G_size; i++){
		// Recur for all the vertices adjacent to this vertex
		for (auto it = G[i].begin(); it != G[i].end(); it++){
			G_rev[*it].push_back(i);
		}
	}
	return G_rev;
}
//Step 2
vector<int> toposort(vector<vector<int> > adj) {

  int n = adj.size();
  vector<int> visited(n, 0);
  vector<int> order;
  //DFS
  for (int u = 0; u < n; u++)
    if (visited[u] == 0)
      dfs_sub_recursive(adj, visited, order, u);

  return order;
}
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
//Step 3
int dfs_iterative(vector<vector<int> > &adj, vector<int> &visited, int u) {

  std::stack<int> st;
  st.push(u);
  visited[u] = 1;
  int numVertices = 1;
  while(!st.empty()){
    int v = st.top();  //Pop a vertex from stack to visit next
    st.pop();
    //visit all neighbor nodes and mark "visited"
    for(auto it = adj[v].begin(); it != adj[v].end(); it++){
      if(visited[*it] == 0){
        st.push(*it);
        visited[*it] = 1;
        numVertices++;
      }
    }
  }
  return numVertices;
}
//Main
int main() {
  size_t n, m;
  std::cin >> n >> m;
  vector<vector<int> > adj(n, vector<int>());
  for (size_t i = 0; i < m; i++) {
    int x, y;
    std::cin >> x >> y;
    adj[x - 1].push_back(y - 1);
  }
  std::cout << num_scc(adj);
}