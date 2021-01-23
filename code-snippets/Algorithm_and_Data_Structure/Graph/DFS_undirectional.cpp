//From Hackerearth
//DFS can be implemented using stack.
//1. Pick a starting node and push all its adjacent nodes into a stack.
//2. Pop a node from stack to select the next node to visit 
//      and push all its adjacent nodes into a stack
//3. Repeat this process until the stack is empty. However, ensure that the nodes 
//  that are visited are marked. This will prevent you from visiting the 
//  same node more than once.

//Pseudocode 1. Iterative
/*
DFS-iterative (G, s):     //Where G is graph and s is source vertex
    let S be stack
    S.push( s )            //Inserting s in stack 
    mark s as visited.
    while ( S is not empty):
        //Pop a vertex from stack to visit next
        v  =  S.top( )
        S.pop( )
        //Push all the neighbours of v in stack that are not visited   
    for all neighbours w of v in Graph G:
        if w is not visited :
            S.push( w )         
            mark w as visited
*/
//Pseudocode 2. Recursive
/*
DFS-recursive(G, s):
    mark s as visited
    for all neighbours w of s in Graph G:
        if w is not visited:
            DFS-recursive(G, w)
*/
#include <iostream>
#include <vector>
#include <stack>

using std::vector;
using std::pair;

int dfs_iterative(vector<vector<int> > &adj, int x, int y) {

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
        if(*it == y)//if x and y are connected
          return 1;
      }
    }
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
    adj[y - 1].push_back(x - 1);
  }
  int x, y;
  std::cin >> x >> y;
  std::cout << dfs_iterative(adj, x - 1, y - 1);

  getchar();
  return 0;
}