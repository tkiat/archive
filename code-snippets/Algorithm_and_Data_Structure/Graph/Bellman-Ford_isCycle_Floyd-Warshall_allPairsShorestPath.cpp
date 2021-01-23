#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <climits>

using namespace std;

int main()
{
	int N, E;

	ifstream myfile("g1.txt");
	string line;

	getline(myfile, line);

	size_t pos = line.find_first_of(" ", 0);
	N = stoi(line.substr(0, pos));
	E = stoi(line.substr(pos + 1, string::npos));


	vector<vector<int>> c(N);
	for (int i = 0; i < N; i++)
			c[i].resize(N);
	/*
	//Part of Floyd-Warshall Algorithm: Enable this iff disable Bellman-Ford otherwise Bellman-Ford won't be correct
	for (int i = 0; i < N; i++){
		for (int j = 0; j < N; j++){
			if(i == j)
				c[i][j] = 0;
			else if(i != j)
				c[i][j] = INT_MAX;
		}
	}
	*/
	int vertice1, vertice2, dist;
	int i = 0;

	if (myfile.is_open()) {

		while (getline(myfile, line)) {

			size_t pos, prev = 0;
			pos = line.find_first_of(" ", 0);
			vertice1 = stoi(line.substr(0, pos)) - 1;

			line.erase(0, pos+1);
			pos = line.find_first_of(" ", 0);
			vertice2 = stoi(line.substr(0, pos)) - 1;

			dist = stoi(line.substr(pos + 1, string::npos));

			//select shortest edge among parallel edges
			if(c[vertice1][vertice2] == 0 || (c[vertice1][vertice2] > 0 && dist < c[vertice1][vertice2]))
				c[vertice1][vertice2] = dist;
			
			i++;
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}

	//Bellman-Ford part
	//Bellman-Ford table A[#step][i_th vertex]
	vector<vector<int>> A(N+1);
	for (int i = 0; i < N+1; i++)
		A[i].resize(N+1);

	int src = 0;
	for (int i = 0; i < A[0].size(); i++){
		A[0][i] = INT_MAX;
	}
	A[0][src] = 0;

	//N vertices -> N-1 iterations for Bellman-Ford
	//but do also N-th iteration to check negative cycle
	for (int i = 1; i < N+1; i++){
		for (int v = 0; v < A[i].size(); v++){

			int minEdge = INT_MAX;
			for (int w = 0; w < A.size(); w++){
				if(A[i-1][w] != INT_MAX && c[w][v] != 0 && A[i-1][w] + c[w][v] < minEdge){
					minEdge = A[i-1][w] + c[w][v];
				}
			}
			A[i][v] = min(A[i-1][v], minEdge);
		}
	}

	//check negative cycle
	for (int v = 0; v < A.size(); v++){
		if(A[N-1][v] != A[N][v]){
			cout << "Negative Cycle\n";
			return 0;
		}
	}
	A.clear();
/*
	//Floyd-Warshall part: Enable this iff disable Bellman-Ford
	vector<vector<int>> D(N);
	for (int i = 0; i < N; i++)
		D[i].resize(N);

	for (int i = 0; i < N; i++){
		for (int j = 0; j < N; j++){
			D[i][j] = c[i][j];
		}
	}

    for (int k = 1; k < N; k++){
        for (int i = 0; i < N; i++){
            for (int j = 0; j < N; j++){
                if (D[i][k] != INT_MAX && D[k][j] != INT_MAX && D[i][k] + D[k][j] < D[i][j])
                    D[i][j] = D[i][k] + D[k][j];
            }
        }
    }

	//Find shortest shorest path
	int minPath = INT_MAX;
	for (int i = 0; i < N; i++){
		for (int j = 0; j < N; j++){
			if(D[i][j] < minPath)
				minPath = D[i][j];
		} 
	}
	cout << "minPath " << minPath << endl;
*/
	cout << "End of File" << endl;
	getchar();
	return 0;
}