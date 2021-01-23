#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

//schedules jobs in decreasing order of thedifference (weight - length)
bool GreedyDifference (const pair<int, int> &a, const pair<int, int> &b) {
	if (a.first - a.second == b.first - b.second)
		return a.first > b.first;
	else
		return a.first - a.second > b.first - b.second;
};

//schedules jobs (optimally) in decreasing order of the ratio weight/length
bool GreedyRatio(const pair<int, int> &a, const pair<int, int> &b) {

	double ratio_a = (double) a.first / (double) a.second;
	double ratio_b = (double) b.first / (double) b.second;
	if (ratio_a == ratio_b)
		return a.first > b.first;
	else
		return ratio_a > ratio_b;
};

int main(){

	int N;

	ifstream myfile("real.txt");
	string line;

	getline(myfile, line);
	N = stoi(line);
	int testNum = N;
	vector<pair<int,int>> a(testNum);
	
	string test;
	if (myfile.is_open()) {
		int i = 0;
		while (getline(myfile, line) && i < testNum) {

			if (line == "") {
				continue;
			}
			size_t pos, prev = 0;
			int weight, length;
			pos = line.find_first_of(" ", prev);
			weight = stoi(line.substr(prev, pos - prev));
			prev = pos + 1;
			length = stoi(line.substr(prev, pos - prev));
			a[i].first = weight;
			a[i].second = length;
			i++;
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}

	sort(a.begin(), a.end(), GreedyDifference);

	long long cumL = 0;
	long long cumSum = 0;
	for (int i = 0; i < testNum; i++) {
		cumL += a[i].second;
		cumSum += a[i].first * cumL;
	}
	cout << "cumSum " << cumSum << endl;

	cout << "End of program\n";
	getchar();
	return 0;
}
