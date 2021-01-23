#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>
#include <sstream>

using namespace std;

bool sortEdgeDist(pair<int, pair<int, int>> &a, pair<int, pair<int, int>> &b){
	return (a.first < b.first);
}

//Union-find algorithm
//1st Initialize all array arr[i] = i (all has their own roots)
//2nd Union = combine B to cluster where A belongs to (root of B becomes root of A)

//finding root of an element
int root(vector <int> &vektor, int i){

	while (vektor[i] != i){
		i = vektor[i];
	}
	return i;
}

void Union(vector <int> &vektor, int A, int B){

	vektor[root(vektor, B)] = root(vektor, A);
}

bool isSameCluster(vector <int> &vektor, int a, int b){

	if (root(vektor, a) == root(vektor, b))
		return true;
	else
		return false;
}
//a = pair<dist, pair<vertex1, vertex2>>
//K = num clusters at the end of Kruskal MST
void max_spacing_K_clustering(vector<pair<int, pair<int, int>>> a, int numVertice, int K) {

	vector<int> Kruskal_MST(numVertice);
	for (int i = 0; i < numVertice; i++)
		Kruskal_MST[i] = i;

	int i = 0;
	int numClusters = numVertice; //no connected vertice yet
	while (numClusters > 1) {	//need K clusters at the end

		//u v are vertice
		int dist_u_v = a[i].first;
		//ignore loop
		if (dist_u_v == 0) {
			i++;
			continue;
		}

		int u = (a[i].second).first;
		int v = (a[i].second).second;

		if (!isSameCluster(Kruskal_MST, u, v)) {
			if (numClusters == K) {
				//*maximum spacing of a K clustering  = dist. of next edge that 
				//Kruskal will add to MST after there are already K clusters
				cout << "Maximum spacing of " << K << " clusters: " << dist_u_v << endl;
			}
			Union(Kruskal_MST, u, v);
			numClusters--;
		}
		i++;
	}
}

int main() {

	int N;
	int K = 4; //num clusters at the end of Kruskal MST

	ifstream myfile("real.txt");
	string line;

	getline(myfile, line);
	N = stoi(line);

	vector<pair<int,pair<int,int>>> a;

	string test;
	if (myfile.is_open()) {

		while (getline(myfile, line)) {

			if (line == "") {
				continue;
			}
			size_t pos, prev = 0;
			int vertex1, vertex2, edgeDist;
			pos = line.find_first_of(" ", 0);
			vertex1 = stoi(line.substr(0, pos)) - 1;

			line.erase(0, pos+1);
			pos = line.find_first_of(" ", 0);
			vertex2 = stoi(line.substr(0, pos)) - 1;

			prev = pos + 1;
			edgeDist = stoi(line.substr(pos + 1, string::npos));
			
			a.push_back(make_pair(edgeDist, make_pair(vertex1, vertex2)));
			a.push_back(make_pair(edgeDist, make_pair(vertex2, vertex1)));
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}
	
	sort(a.begin(), a.end(), sortEdgeDist); //sort ascending order

	max_spacing_K_clustering(a, N, K);

	cout << "End of program\n";
	getchar();
	return 0;
}
