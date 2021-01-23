#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>
#include <functional>
#include <queue>
using namespace std;

void display1DVector(vector<int> vektor) {
	int vektor_size = vektor.size();
	for (auto it = vektor.begin(); it != vektor.end(); it++) {
		cout << *it << " ";
	}
	cout << endl;
}

int main()
{
	const int N = 10000;
	int src = 0;
	
	vector<int> a(N);

	ifstream myfile("Median.txt");
	string line;
	
	string test;
	if (myfile.is_open()) {
		int i = 0;
		while (getline(myfile, line) && i < N) {
			a[i] = stoi(line);
			i++;
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}

	priority_queue<int, vector<int>, greater<int>> minHeap; //top = its min = contain N/2 highest elements
	priority_queue<int> maxHeap; //top = its max = contain N/2 lowest elements
	

	int median = 0, sum_median = 0;
	int k = 0;

	while (k < N) {

		if (maxHeap.size() > minHeap.size()){

			if (a[k] < median){
				minHeap.push(maxHeap.top());	//place at top
				maxHeap.pop();
				maxHeap.push(a[k]);
			}
			else {
				minHeap.push(a[k]);
			}
				
			median = maxHeap.top();
		}
		else if (maxHeap.size() == minHeap.size()){

			if (a[k] < median){
				maxHeap.push(a[k]);
				median = maxHeap.top();
			}
			else{
				minHeap.push(a[k]);
				median = minHeap.top();
			}
			
		}
		else if (maxHeap.size() < minHeap.size()) {

			if (a[k] > median){
				maxHeap.push(minHeap.top());
				minHeap.pop();
				minHeap.push(a[k]);
			}
			else {
				maxHeap.push(a[k]);
			}
				
			median = maxHeap.top();
		}
		sum_median += median;
		sum_median %= 10000;
		k++;
		cout << median << endl;
	}

	cout << "Sum of all medians is " << sum_median << endl;

	getchar();
	return 0;
}
