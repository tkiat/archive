#include <iostream>
#include <fstream>
#include <string>
using namespace std;

long long mergeAndCountInv(int arr[], int temp[], int left, int mid, int right) {

	//given two sorted subarrays
	//count number of split inversions and merge them
	//return resultant merge array

	int n = sizeof(arr) / sizeof(arr[0]);

	long long inv_count = 0;

	int i = left; //1st index of left subarray
	int j = mid; //1st index of right subarray
	int k = left; //1st index of resultant merged subarray

	while ((i <= mid - 1) && (j <= right)) {
		if (arr[i] <= arr[j]) {
			temp[k++] = arr[i++];
		}
		else {
			temp[k++] = arr[j++];
			//ex [1 3 5] and [2 4 6] when 2 is copied to temp the split inversions are (3,2) and (5,2)
			inv_count += (mid - i);
		}
	}

	// Copy the remaining elements of left subarray (if any)
	while (i <= mid - 1)
		temp[k++] = arr[i++];

	// Copy the remaining elements of right subarray (if any)
	while (j <= right)
		temp[k++] = arr[j++];

	//copy the merged array to original array
	for (i = left; i <= right; i++)
		arr[i] = temp[i];

	return inv_count;
}

long long _mergeSort(int arr[], int temp[], int left, int right)
{
	int mid;
	long long inv_count = 0;

	//if has more than 2 elements in an array
	if (right > left)
	{
		// Divide the array into two parts and call mergeAndCountInv()
		mid = (right + left) / 2;

		/* Inversion count will be sum of inversions in left-part, right-part
		and number of inversions in merging */
		inv_count = _mergeSort(arr, temp, left, mid);
		inv_count += _mergeSort(arr, temp, mid + 1, right);

		/*Merge the two parts*/
		inv_count += mergeAndCountInv(arr, temp, left, mid + 1, right);
	}
	return inv_count;
}

long long mergeSort(int arr[], int array_size)
{
	int *temp = (int *) malloc(sizeof(int)* array_size);
	return _mergeSort(arr, temp, 0, array_size - 1);
}

int main()
{
	//Get a[n]
	string line;
	int a[100000];
	int n = 0;
	ifstream myfile ("text.txt");

	if (myfile.is_open()){
		while (getline(myfile, line))
		{
			a[n] = stoi(line);
			n++;
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}
	
	cout << "Number of inversions are " << mergeSort(a, 100000) << endl;

	getchar();
    return 0;
}