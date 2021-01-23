#include <algorithm>
#include <iostream>
#include <iomanip>
#include <vector>
#include <cmath>
#include <queue>

using std::vector;
//----------------------------------------
struct edge{
	int vertex;
	double edgeDist;
	edge(int a, double b) : vertex(a), edgeDist(b) {}
};
struct leastDistOnHeap{
  bool operator()(const edge& lhs, const edge& rhs) const{
    return lhs.edgeDist > rhs.edgeDist;
  }
};
//----------------------------------------
double euclideanDist(double x1, double y1, double x2, double y2){
	return pow((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2), 0.5);
}
double prim_MST(vector<int> x, vector<int> y) {

	double totalDist = 0.;
	int n = x.size(); //# nodes

	bool visited[n];
	std::fill_n(visited, n, false);

	std::priority_queue <edge, vector<edge>, leastDistOnHeap> pq;
	pq.push(edge(0,0));

	while(!pq.empty()) {

		edge E = pq.top();
		int u = E.vertex;
		pq.pop();
		if(visited[u])
			continue;

		visited[E.vertex] = true;
		totalDist += E.edgeDist;
		//primMST.push_back(E);

		for(int v = 0; v < n; v++){

			if(visited[v])
				continue;
			pq.push(edge(v, euclideanDist(x[u], y[u], x[v], y[v])));
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
	
  std::cout <<std::fixed << std::setprecision(10) << prim_MST(x, y) << std::endl;
}