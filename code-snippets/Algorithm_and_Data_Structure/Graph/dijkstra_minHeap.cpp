#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
#include <functional>
#include <climits>

using std::vector;
using std::queue;
using std::pair;
using std::priority_queue;

int dijkstra(vector<vector<int> > &adj, vector<vector<int> > &cost, int s, int t) {
  
	//std::greater<std::pair<int, int>> sort the first element of pair in ascending order
	//min element stays on top of heap
	priority_queue <std::pair<int, int>, vector<std::pair<int, int>>, std::greater<std::pair<int, int>> > pq;
	pq.push(std::make_pair(0, s));
	vector<int> dist_update(adj.size(), INT_MAX);
	dist_update[s] = 0;
	while (!pq.empty()) {

		int u = (pq.top()).second;
		pq.pop();
		auto it_cost = cost[u].begin();
		for (auto it = adj[u].begin(); it != adj[u].end(); it++){

			int v = *it;
			int weight = *it_cost;
			it_cost++;

			//  If there is shortest path to v through u then update it
			if (dist_update[v] > dist_update[u] + weight){

				dist_update[v] = dist_update[u] + weight;
				pq.push(std::make_pair(dist_update[v], v));
			}
		}
	}
	if(dist_update[t] == INT_MAX)
		return -1;
	return dist_update[t];
}

int main() {

	int n, m;
	std::cin >> n >> m;
	vector<vector<int> > adj(n, vector<int>());
	vector<vector<int> > cost(n, vector<int>());
	for (int i = 0; i < m; i++) {
	int x, y, w;
		std::cin >> x >> y >> w;
		adj[x - 1].push_back(y - 1);
		cost[x - 1].push_back(w);
	}
	int s, t;
	std::cin >> s >> t;
	std::cout << dijkstra(adj, cost, s - 1, t - 1);
}