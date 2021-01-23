#include "stdafx.h"
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <algorithm>
#include <queue>

using namespace std;

typedef struct HuffmanNode{

	int data;
	int weight;

	HuffmanNode * left;
	HuffmanNode * right;

	HuffmanNode(int data, int weight) {
		this->left = nullptr;
		this->right = nullptr;
		this->data = data;
		this->weight = weight;
	}
}HuffmanNode;

struct ascending {

	bool operator()(HuffmanNode* a, HuffmanNode* b) {
		return (a->weight > b->weight);
	}
};

void printCodes(HuffmanNode *root, string str) {

	if (root == nullptr)
		return;

	if (root->data != -1)
		cout << root->data << ": " << str << "\n";

	printCodes(root->left, str + "0");
	printCodes(root->right, str + "1");
}

int maxCodeword(HuffmanNode* root) {	//= tree height = max node height

	if (root == nullptr) {
		return -1;
	}
	else {
		return 1 + max(maxCodeword(root->left), maxCodeword(root->right));
	}
}

int minCodeword(HuffmanNode* root) {	//= min node height

	if (root == nullptr) {
		return -1;
	}
	else {
		return 1 + min(minCodeword(root->left), minCodeword(root->right));
	}
}

void HuffmanCodes(vector<int> data, vector<int> weight) {

	int data_size = data.size();

	HuffmanNode *left, *right;

	priority_queue<HuffmanNode*, vector<HuffmanNode*>, ascending> minHeap;

	for (int i = 0; i < data_size; i++) {
		HuffmanNode *temp = new HuffmanNode(data[i], weight[i]);
		minHeap.push(temp);
	}

	while (minHeap.size() != 1) {

		//assign two min-weight nodes to left and right
		left = minHeap.top();
		minHeap.pop();

		right = minHeap.top();
		minHeap.pop();

		// Create a new internal node with weight equal to the sum
		HuffmanNode *top = new HuffmanNode(-1, left->weight + right->weight);
		top->left = left;
		top->right = right;
		minHeap.push(top);
	}
	cout << "Max codeword " << maxCodeword(minHeap.top()) << endl;
	cout << "Min codeword " << minCodeword(minHeap.top()) << endl;
	//printCodes(minHeap.top(), "");
}

int main() {

	int N;

	ifstream myfile("real.txt");
	string line;

	getline(myfile, line);
	N = stoi(line);

	vector<int> data(N);
	vector<int> weight(N);

	string test;
	if (myfile.is_open()) {
		int i = 0;
		while (getline(myfile, line)) {
			if (line == "") {
				continue;
			}
			weight[i] = stoi(line); //store weight
			data[i] = i;
			i++;
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}
	HuffmanCodes(data, weight);

	cout << "End of program\n";
	getchar();
	return 0;
}
