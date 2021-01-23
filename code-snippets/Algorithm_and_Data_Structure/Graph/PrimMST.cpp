#include "stdafx.h"
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>
#include <sstream>
#include <climits>
using namespace std;

bool GreedyDifference(const pair<int, int> &a, const pair<int, int> &b) {
	if (a.first - a.second == b.first - b.second)
		return a.first > b.first;
	else
		return a.first - a.second > b.first - b.second;
};

int main() {

	int N, E;

	ifstream myfile("real.txt");
	string line;

	getline(myfile, line);

	size_t pos = 0;;

	pos = line.find_first_of(" ");
	N = stoi(line.substr(0, pos));
	E = stoi(line.substr(pos + 1, string::npos));

	int testNum = E;

	vector<vector<int>> a(N);
	for (int i = 0; i < N; i++)
		a[i].resize(N);

	string test;
	if (myfile.is_open()) {
		int i = 0;
		while (getline(myfile, line) && i < testNum) {

			if (line == "") {
				continue;
			}
			size_t pos, prev = 0;
			int vertex1, vertex2, edgeDist;

			pos = line.find_first_of(" ");
			vertex1 = stoi(line.substr(0, pos)) - 1;
			prev = pos + 1;
			line = line.substr(prev, string::npos);

			pos = line.find_first_of(" ");
			vertex2 = stoi(line.substr(0, pos)) - 1;
			prev = pos + 1;
			line = line.substr(prev, string::npos);

			pos = line.find_first_of(" ");
			stringstream ss(line.substr(0, pos));
			ss >> edgeDist;

			a[vertex1][vertex2] = edgeDist;
			a[vertex2][vertex1] = edgeDist;

			i++;
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}

	//visited nodes, initialize to node 1
	vector<int> visited;
	visited.push_back(0);

	//unvisited nodes
	vector<int> unvisited;
	for (int i = 1; i < N; i++) {
		unvisited.push_back(i);
	}

	vector<pair<int, int>> T;

	int dist = 0, i = 0;
	pair<int, int> newEdge;

	while (visited.size() != N) {

		int minDist = INT_MAX;
		for (auto i = visited.begin(); i != visited.end(); i++) {
			for (auto j = unvisited.begin(); j != unvisited.end(); j++) {
//cout << "a[*i][*j] " << a[*i][*j] << endl;
				if (a[*i][*j] < minDist && a[*i][*j] != 0) {
					newEdge = make_pair(*i, *j);
					minDist = a[*i][*j];
				}
			}
		}

		int u = newEdge.first;
		int v = newEdge.second;

//cout << "edge " << u << "-" << v << " edge length " << minDist << endl;

		dist += minDist;
		visited.push_back(v);
		unvisited.erase(remove(unvisited.begin(), unvisited.end(), v), unvisited.end());
		T.push_back(make_pair(u, v));

	}

	cout << "Total dist: " << dist << endl;

	cout << "End of program\n";
	getchar();
	return 0;
}
