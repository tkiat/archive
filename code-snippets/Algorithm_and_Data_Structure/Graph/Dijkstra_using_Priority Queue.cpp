//part of it from Geeksforgeeks

#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <queue>

using namespace std;

int main()
{
	const int N = 200;
	int src = 0;

	vector<vector<pair <int, int>>> adj(N);

	ifstream myfile("real.txt");
	string line;
	int vertice1;
	string vertice2_dist;
	int vertice2;
	int dist;

	string test;
	if (myfile.is_open()) {

		while (getline(myfile, line)) {
			size_t pos, prev = 0;
			string token;
			if ((pos = line.find_first_of("\t \0", prev)) != string::npos) {
				vertice1 = stoi(line.substr(prev, pos - prev)) - 1;
				prev = pos + 1;
			}
			while ((pos = line.find_first_of("\t \0", prev)) != string::npos) {
					vertice2_dist = line.substr(prev, pos - prev);
					size_t pos2 = vertice2_dist.find(',');
					if (pos2 != string::npos) {
						vertice2 = stoi(vertice2_dist.substr(0, pos2)) - 1;
						dist = stoi(vertice2_dist.substr(pos2 + 1, string::npos));
						adj[vertice1].push_back(make_pair(vertice2, dist));
						adj[vertice2].push_back(make_pair(vertice1, dist));
					}
					prev = pos + 1;
			}
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}
//to add <greater> in pq
	priority_queue<pair <int, int>> pq;	//store (dist, node #)
	vector<int> dist_update(N, 99999);
	
	//initialize distance to itself 0 
	pq.push(make_pair(0, src));
	dist_update[src] = 0;

	while (!pq.empty()) {

		int u = pq.top().second;
		pq.pop();
		for (auto i = adj[u].begin(); i != adj[u].end(); ++i){

			int v = (*i).first;
			int weight = (*i).second;

			//  If there is shortest path to v through u then update it
			if (dist_update[v] > dist_update[u] + weight){

				dist_update[v] = dist_update[u] + weight;
				pq.push(make_pair(dist_update[v], v));
			}
		}
	}
	printf("Source: %d\n", src);
	printf("Vertex   Distance from Source\n");
	for (int i = 0; i < N; ++i)
		printf("%d \t %d\n", i, dist_update[i]);

	getchar();

	return 0;
}
