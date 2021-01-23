#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>
#include <sstream>
#include <unordered_set>

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
		vektor[i] = vektor[vektor[i]];
		i = vektor[i];
	}
	return i;
}

void Union(vector <int> &vektor, int a, int b){

	vektor[root(vektor, b)] = root(vektor, a);
}

bool isSameCluster(vector <int> &vektor, int a, int b){

	if (root(vektor,a) == root(vektor,b))
		return true;
	else
		return false;
}

/*
Haoyu Yun
Week 2 · 4 months ago · Edited
I used a hash table with tuples of the bits (as booleans) as the keys. Note that all duplicates are already placed in one cluster this way.

This gave me an O(N * B^2) algorithm.

For each key (N)
I manually generate all possible keys (B*(B-1)/2 + B ==> O(B^2)) that are a Hamming distance of 1 or 2 away (neighbors) and
Union the key with all of these neighbors.
It took about 3 minutes on my Python 3.5.
*/
int main() {

	
	int N;
	int B;

	ifstream myfile("real.txt");
	string line;

	getline(myfile, line);
	size_t pos = line.find_first_of(" ", 0);
	N = stoi(line.substr(0, pos));
	B = stoi(line.substr(pos + 1, string::npos));
	
	unordered_set<int> set;

	if (myfile.is_open()) {
		int i = 0;
		while (getline(myfile, line)) {

			if (line == "") {
				continue;
			}
			int exp = 1 << 23;
			int value = 0;
			while ((pos = line.find_first_of(" ", 0)) != string::npos) {
				value += exp * stoi(line.substr(0, pos));
				line.erase(0, pos + 1);
				exp >>= 1;
			}
			set.insert(value);
			i++;
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}

	int set_size = set.size();
	cout << "set size " << set_size << endl;
	
	vector <int> clusters(set_size);
	for (int i = 0; i < set_size; i++) {
		clusters[i] = i;
	}
	
	//XOR value in set with f(a) and f(a,b) to test for Hamming dist = 1 and 2 respectively
	vector<int> hamm_dist_1_or_2;
	int a = 1, b, f_a, f_ab;
	for (int i = 0; i < 23; i++) {
		b = a << 1;
		for (int j = i; j < 23; j++) {
			f_ab = a + b;
			hamm_dist_1_or_2.push_back(f_ab);
			b <<= 1;
		}
		f_a = a;
		hamm_dist_1_or_2.push_back(f_a);
		a <<= 1;
	}
	hamm_dist_1_or_2.push_back(1 << 23);
	
	int numCluster = set_size;
	int i = 0;

	unordered_set<int, int>::iterator _it2;
	for (auto it = set.begin(); it != set.end(); it++) {
		for (auto _it = hamm_dist_1_or_2.begin(); _it != hamm_dist_1_or_2.end(); _it++) {

			_it2 = set.find(*it ^ *_it);
			if (_it2 != set.end()) {	//found in set
				if (!isSameCluster(clusters, distance(set.begin(), it), distance(set.begin(), _it2))) {
					Union(clusters, distance(set.begin(), it), distance(set.begin(), _it2));
					numCluster--;
				}
			}
		}
		if (i % 500 == 0)
			printf("current i: %d, current numCluster %d\n", i, numCluster);
		i++;
	}
	cout << "numCluster: " << numCluster;

	cout << "End of program\n";
	getchar();
	return 0;
}
