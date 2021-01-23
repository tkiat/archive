#include <iostream>
#include <fstream>
#include <string>
#include <algorithm>
using namespace std;

void swap(int* a, int* b)
{
	int t = *a;
	*a = *b;
	*b = t;
}

int partition(int arr[], int low, int high, int &numComp){

	//assign value to pivot
	//rearrange pivot (smaller than pivot is at left, greater at right)
	
	int pivot_case = 1;

	int pivot, i, j, end;

	if (pivot_case == 1) { //pivot = leftmost element
	}
	else if (pivot_case == 2) { //pivot = rightmost element
		swap(&arr[low], &arr[high]);
	}
	else if (pivot_case == 3) { //pivot = median element of {arr[low], arr[mid], arr[high]}

		int median;
		int mid = (low+high)/2; //mid = middle element in odd-length array or kth element in 2k-length array
		//pivot = median of these three
		if (arr[low] > arr[high] && arr[high] > arr[mid] || arr[low] < arr[high] && arr[high] < arr[mid]) {
			median = high;
		}
		else if (arr[high] > arr[mid] && arr[mid] > arr[low] || arr[high] < arr[mid] && arr[mid] < arr[low]) {
			median = mid;
		}
		else
			median = low;

		swap(&arr[low], &arr[median]);
	}

	pivot = arr[low];
	i = low + 1;
	j = low + 1;
	end = high;
	
	while (j <= end){
		if (arr[j] < pivot){
			swap(&arr[i], &arr[j]);
			i++;
		}
		j++;
	}

	numComp += high - low;

	swap(&arr[low], &arr[i-1]);
		return i - 1;
	if (pivot_case == 2) {
		swap(&arr[i + 1], &arr[high]);
		return (i + 1);
	}
	else if (pivot_case == 3) {
		swap(&arr[i + 1], &arr[high]);
		return 0;
	}

	return 0;
}

//Main QuickSort function
void quickSort(int arr[], int low, int high, int &numComp){

	if (low < high)
	{
		//pi = partitioning index = rearranged pivot
		int pi = partition(arr, low, high, numComp);
		
		//Sort elements in both left and right partitions
		quickSort(arr, low, pi - 1, numComp);
		quickSort(arr, pi + 1, high, numComp);
	}
}

int main()
{
	//Get a[n]
	string line;
	int a[10000];
	int n = 0;
	ifstream myfile ("QuickSort.txt");

	if (myfile.is_open()){
		while (getline(myfile, line) && n < 10000)
		{
			a[n] = stoi(line);
			n++;
		}
		myfile.close();
	}
	else {
		cout << "Unable to open file\n";
	}
	int numComp = 0;

	quickSort(a, 0, sizeof(a) / sizeof(a[0]) - 1, numComp);

	cout << "Number of Comparison: " << numComp << endl;
	getchar();
    return 0;
}