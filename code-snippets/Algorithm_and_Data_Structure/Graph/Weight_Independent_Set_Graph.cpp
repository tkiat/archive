#include "stdafx.h"
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int main() {

	int N;

	ifstream myfile("real.txt");
	string line;

	getline(myfile, line);
	N = stoi(line);

	vector<long> w(N+1);

	string test;
	if (myfile.is_open()) {
		int i = 1;
		while (getline(myfile, line)) {
			if (line == "") {
				continue;
			}
			w[i] = stoi(line); //store weight
			i++;
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}

	vector<long long> A(N+1);

	//construction
	A[0] = 0;
	A[1] = w[1];
	for (int i = 2; i < N+1; i++) {
		A[i] = max(A[i - 1], A[i - 2] + w[i]);
	}

	long long max_sum = 0;
	//reconstruction
	vector<long> S;
	int i = N;
	while (i >= 1) {

		if (i>=2 && A[i - 1] >= A[i - 2] + w[i]) {	//case 1 wins
			i--;
		}
		else { //case 2 wins
			S.push_back(A[i]);
			cout << i << "  ";
			max_sum += w[i];
			i -= 2;
		}
	}
	cout << endl;
	cout << "max_sum " << max_sum << endl;

	cout << "End of program\n";
	getchar();
	return 0;
}
