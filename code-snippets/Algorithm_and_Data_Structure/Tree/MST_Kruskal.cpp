#include <algorithm>
#include <iostream>
#include <iomanip>
#include <vector>
#include <cmath>
#include <queue>

using std::vector;
//----------------------------------------
struct edge{
	int vertex1;
	int vertex2;
	double edgeDist;
	edge(int a, int b, double c) : vertex1(a), vertex2(b), edgeDist(c) {}
};
struct leastDistOnHeap{
  bool operator()(const edge& lhs, const edge& rhs) const{
    return lhs.edgeDist > rhs.edgeDist;
  }
};
//Union Find
struct DisjointSetsElement {
	int parent, rank;

	DisjointSetsElement(int parent = -1, int rank = 0):
	  parent(parent), rank(rank) {}
};
struct DisjointSets {
	vector <DisjointSetsElement> sets;

	DisjointSets(int size): sets(size) {
		for (int i = 0; i < size; i++)
			sets[i].parent = i;
	}
	int findParent(int i) {
		//find parent and compress path
		if(i != sets[i].parent)
			sets[i].parent = findParent(sets[i].parent);
		return sets[i].parent;
	}
	void Union(int dest, int src) {
		int dest_parent = findParent(dest);
		int src_parent = findParent(src);
		//merge two components using union by rank heuristic
		if(dest_parent == src_parent)
			return;
		else if(sets[dest_parent].rank > sets[src_parent].rank){
			sets[src_parent].parent = dest_parent;
		}
		else{
			sets[dest_parent].parent = src_parent;
			if(sets[dest_parent].rank == sets[src_parent].rank)
				sets[src_parent].rank++;
		}
	}
	bool isSameCluster(int a, int b){
    if (findParent(a) == findParent(b))
      return true;
    return false;
  }
};
//----------------------------------------
//EuclideanDist
double euclideanDist(double x1, double y1, double x2, double y2){
	return pow((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2), 0.5);
}
//Kruskal MST
double Kruskal_MST(vector<int> x, vector<int> y) {

	int n = x.size(); //# nodes
	std::priority_queue <edge, vector<edge>, leastDistOnHeap> pq;
	//push all possible edges in pq (n choose 2 # of edges for n vertices nodes)
	for (int u = 0; u < n; u++) {
		for (int v = u + 1; v < n; v++)
			pq.push(edge(u, v, euclideanDist(x[u], y[u], x[v], y[v])));
	}
	//Determine Kruskal MST
	DisjointSets table(n);

	double totalDist = 0.;
	int numCluster = n;
	while (numCluster > 1) {

		edge E = pq.top();
		int u = E.vertex1;
		int v = E.vertex2;
		pq.pop();
		if(!table.isSameCluster(u, v)){
			//kruskalMST.push_back(newEdge);
			table.Union(u, v);
			totalDist += E.edgeDist;
			numCluster--;
		}
	}
  return totalDist;
}
//----------------------------------------
int main() {
  size_t n;
  std::cin >> n;
  vector<int> x(n), y(n);
  for (size_t i = 0; i < n; i++) 
    std::cin >> x[i] >> y[i];
		
  std::cout << std::fixed << std::setprecision(10) << Kruskal_MST(x, y) << std::endl;
}
