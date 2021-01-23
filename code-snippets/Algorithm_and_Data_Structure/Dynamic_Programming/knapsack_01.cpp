#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int knapSack_1st(int W, vector <int> wt, vector <int> val, int n) {

	//copy from Geeksforgeeks
	vector<vector<int>> K(n + 1);
	for (int i = 0; i < n+1; i++)
		K[i].resize(W+1);
	// Build table K[][] in bottom up manner
	for (int i = 0; i <= n; i++) {

		for (int w = 0; w <= W; w++) {

			if (i == 0 || w == 0)
				K[i][w] = 0;
			else if (wt[i - 1] <= w)
				K[i][w] = max(val[i - 1] + K[i - 1][w - wt[i - 1]], K[i - 1][w]);

			else
				K[i][w] = K[i - 1][w];

		}
	}

	return K[n][W];

}

int main() {

	int W;
	int N;

	ifstream myfile("1st.txt");
	string line;
	
	getline(myfile, line);
	size_t pos = line.find(' ');
	W = stoi(line.substr(0,pos));	//W = knapsack size
	N = stoi(line.substr(pos+1, string::npos));
	
	vector<int> value(N);
	vector<int> weight(N);
	
	string test;
	if (myfile.is_open()) {
		int i = 0;
		while (getline(myfile, line)) {
			if (line == "") {
				continue;
			}
			size_t pos = line.find(' ');
			value[i] = stoi(line.substr(0, pos));
			weight[i] = stoi(line.substr(pos + 1, string::npos));
			i++;
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}

	cout << "max_sum " << knapSack_1nd(W, weight, value, N) << endl;

	cout << "End of program\n";
	getchar();
	return 0;
}
