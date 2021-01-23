#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <cmath>

#define INT_MAX 9999999

using namespace std;

long double EuclideanDist(double x1, double y1, double x2, double y2){
	return sqrt(pow(x1 - x2, 2) + pow(y1 - y2, 2));
}

int main(){

	int N;

	ifstream myfile("real.txt");
	string line;
	getline(myfile, line);

	N = stoi(line);

	vector<vector<double>> c(N);
	for(int i = 0; i < N ; i++)
		c[i].resize(3);

	double x, y;

	if (myfile.is_open()) {
		int i = 0;
		while (getline(myfile, line)) {
			
			if(line == "")
				continue;
			size_t pos;
			pos = line.find_first_of(" ", 0);
			x = stod(line.substr(0, pos));
			line.erase(0, pos+1);
			pos = line.find_first_of(" ", 0);
			x = stod(line.substr(0, pos));
			y = stod(line.substr(pos + 1, string::npos));

			c[i][0] = i + 1; //not neccessary
			c[i][1] = x;
			c[i][2] = y;
			i++;
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}

	double totalDist = 0;
	int index = 0;
	int cur_index = 0; //start from index 0
	double init_x = c[cur_index][1];	//save initial point
	double init_y = c[cur_index][2];
	while(c.size() > 1){
		int counter = c.size()-1;
		int nth_nextIndex = 1;
		double minDist = INT_MAX;
		int minDist_index = 1;
		while(counter > 0){
			int index_comp = (cur_index + nth_nextIndex) % c.size();
			double dist = EuclideanDist(c[cur_index][1], c[cur_index][2], c[index_comp][1], c[index_comp][2]);
			if(dist < minDist || (dist == minDist && index_comp < (cur_index + minDist_index) % c.size()) ){ //less dist than or (equal dist and closer)
				minDist = dist;
				minDist_index = nth_nextIndex;
			}
			nth_nextIndex++;
			counter--;
		}
		totalDist += minDist;
		c.erase(c.begin() + cur_index);
		cur_index += minDist_index -1;	//-1 since erase an element
		cur_index %= c.size();
	}
	totalDist += EuclideanDist(c[0][1], c[0][2], init_x, init_y);
	cout.precision(10);
	cout << "totalDist " << totalDist << endl;

	cout << "End of File" << endl;
	getchar();
	return 0;
}