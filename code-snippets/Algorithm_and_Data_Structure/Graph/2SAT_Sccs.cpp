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
	int _offset;

	public: 

		Graph(int N) {
			adj.resize(N);
			_offset = N/2;
		}

		void addDirectedEdge(int vertex1, int vertex2);
		Graph getTranspose(vector<vector<int>> &original);

		void DFS(int i, vector<int> &visited, stack<int> &f);
		int DFS_withoutStack(int i, vector<int> &visited, int index, vector<int> &scc_elements);

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

int Graph::DFS_withoutStack(int i, vector<int> &visited, int index, vector<int> &scc_elements) {

	visited[i] = 1; //mark node i as visited
	scc_elements.push_back(i);
	index++;
	for (auto it = adj[i].begin(); it != adj[i].end(); it++) {
		if (visited[*it] == -1) {	//if i not explored
			index += DFS_withoutStack(*it, visited, 0, scc_elements);
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
		vector<int> scc_elements;
		int index = 0;
		// Pop a vertex from stack
		int u = finishing_time.top();
		finishing_time.pop();

		// Print Strongly connected component of the popped vertex
		if (visited[u] == -1){
			index = DFS_withoutStack(u, visited, index, scc_elements);	//DFS through original adj
			scc.push_back(index);
			if(scc_elements.size() > 1){
				cout << "SCC size: " << scc_elements.size();
				for (auto it = scc_elements.begin(); it != scc_elements.end(); it++) {
					auto pos = find (scc_elements.begin(), scc_elements.end(), -(*it - _offset) + _offset);
					if(pos != scc_elements.end()){
						cout << " Not satisfiable! ";
						break;
					}
				}
				cout << endl;
			}
		}
	}
	return scc;
}

//All RefFiles contain values from -1000000 to 1000000 (except 0)
//add offset so that non of vertices are less than zero
int main() {

	ifstream myfile("34_X Q1 RefFile 2sat1.txt");
	string line;
	getline(myfile, line);
	int N = stoi(line);
	int offset = N;
	N *= 2;	//for one input (a v b) store both ~a → b and a → ~b
	Graph adj(N+1);

	int vertex1;
	int vertex2;

	int i = 0;
	if (myfile.is_open()) {

		while (getline(myfile, line)) {
			if (line != "") {
				size_t pos;
				pos = line.find_first_of(" ", 0);
				vertex1 = stoi(line.substr(0, pos));
				vertex2 = stoi(line.substr(pos + 1, string::npos));

				adj.addDirectedEdge(-vertex1 + offset, vertex2 + offset);
				adj.addDirectedEdge(-vertex2 + offset, vertex1 + offset);
			}
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}


	vector <int> result;
	result = adj.Kosaraju_SCC();

	cout << "\nEnd of File\n";
	getchar();
	return 0;
}
