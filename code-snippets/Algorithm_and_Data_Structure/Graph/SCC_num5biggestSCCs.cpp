#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <stack>
#include <algorithm>

using namespace std;

void display2DVector(vector<vector<int>> vektor) {
	int vektor_size = vektor.size();
	for (int i = 0; i < vektor_size; i++) {
		for (auto it = vektor[i].begin(); it != vektor[i].end(); it++) {
			cout << *it << " ";
		}
		cout << endl;
	}
}

class Graph {

	vector<vector<int>> adj;

	public: 

		Graph(int N) {
			adj.resize(N);
		}

		void addDirectedEdge(int vertex1, int vertex2);
		Graph getTranspose(vector<vector<int>> &original);

		void DFS(int i, vector<int> &visited, stack<int> &f);
		int DFS_withoutStack(int i, vector<int> &visited, int index);

		vector <int> Kosaraju_SCC();
};

void Graph::addDirectedEdge(int vertex1, int vertex2) {
	adj[vertex1].push_back(vertex2);
}

Graph Graph::getTranspose(vector<vector<int>> &original){

	int original_size = original.size();
	Graph reverse(original_size);
	for (int i = 0; i < original_size; i++){

		// Recur for all the vertices adjacent to this vertex
		for (auto it = adj[i].begin(); it != adj[i].end(); it++){
			reverse.adj[*it].push_back(i);
		}
	}
	return reverse;
}

void Graph::DFS(int i, vector<int> &visited, stack<int> &f) {

	visited[i] = 1; //mark node i as visited
					//f = finishing time of each vertex

	for (auto it = adj[i].begin(); it != adj[i].end(); it++) {
		if (visited[*it] == -1) {	//if i not explored
			DFS(*it, visited, f);
		}
	}
	f.push(i);
}

int Graph::DFS_withoutStack(int i, vector<int> &visited, int index) {

	visited[i] = 1; //mark node i as visited
	index++;
	for (auto it = adj[i].begin(); it != adj[i].end(); it++) {
		if (visited[*it] == -1) {	//if i not explored
			index += DFS_withoutStack(*it, visited, 0);
		}
	}
	return index;
}

vector <int> Graph::Kosaraju_SCC() {

	stack<int> finishing_time;
	int adj_size = adj.size();

	//initialze all vertice as "unvisited"
	vector<int> visited(adj_size);
	fill(visited.begin(), visited.end(), -1);

	//1st step: Create reverse graph
	Graph adj_reverse = getTranspose(adj);

	//2nd step: DFS-Loop on reverse graph, get finishing time of all nodes
	for (int i = 0; i < adj_size; i++)
		if (visited[i] == -1)
			adj_reverse.DFS(i, visited, finishing_time);

	fill(visited.begin(), visited.end(), -1); //clear visited vertice

vector<int> scc;

	//3rd step: DFS-Loop on original graph in decreasing order of finishing time
	while (!finishing_time.empty()){

		int index = 0;
		// Pop a vertex from stack
		int u = finishing_time.top();
		finishing_time.pop();

		// Print Strongly connected component of the popped vertex
		if (visited[u] == -1){
			index = DFS_withoutStack(u, visited, index);	//DFS through original adj
			scc.push_back(index);
		}
	}
	return scc;
}

int main() {

	const int N = 875714;

	Graph adj(N);

	ifstream myfile("real.txt");
	string line;
	int vertex1;
	int vertex2;

	int i = 0;
	if (myfile.is_open()) {

		while (getline(myfile, line)) {
			if (line != "") {
				size_t pos, prev = 0;
				pos = line.find_first_of(" ", prev);
				vertex1 = stoi(line.substr(0, pos)) - 1;
				vertex2 = stoi(line.substr(pos + 1, string::npos)) - 1;
				adj.addDirectedEdge(vertex1, vertex2);
				i++;
			}
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}

	vector <int> result;
	result = adj.Kosaraju_SCC();
	
	sort(result.begin(), result.end());
	for (auto it = result.end()-1; it != result.end() - 6; it--) {
		cout << *it << " ";
	}
	
	cout << "\nEnd of program\n";
	getchar();
	return 0;
}
