#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int knapSack_2nd(int W, vector <int> wt, vector <int> val, int n) {

	//copy from Geeksforgeeks
	vector<int> K(W+1);

	// iterate through all items
	for (int i = 0; i < n; i++) {
		
		for (int j = W; j >= wt[i]; j--) {
			K[j] = max(K[j], val[i] + K[j - wt[i]]);
			
		}
		cout << "check";
	}
		
			
	/*above line finds out maximum of  dp[j](excluding ith element value)
	and val[i] + dp[j-wt[i]] (including ith element value and the
	profit with "KnapSack capacity - ith element weight") */
	return K[W];

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

	cout << "max_sum " << knapSack_2nd(W, weight, value, N) << endl;

	cout << "End of program\n";
	getchar();
	return 0;
}
