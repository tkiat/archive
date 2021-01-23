#include <iostream>

void swap(int *x, int *y){
    int temp = *x;
    *x = *y;
    *y = temp;
}

int leftChild(int i){
    return 2*i + 1;
}
int rightChild(int i){
    return 2*i + 2;
}
void siftDown(int arr[], int n, int i){

    int maxIndex = i;
    int l = leftChild(i);
    if (l < n && arr[l] > arr[maxIndex]){ //change > to < to become minHeap
        maxIndex = l;
    }
    int r = rightChild(i);
    if (r < n && arr[r] > arr[maxIndex]){
        maxIndex = r;
    }
    if (i != maxIndex){
        swap(&arr[i], &arr[maxIndex]);
        siftDown(arr, n, maxIndex);
    }
}
//build heap
void heapify(int arr[], int n){
    for(int i = n/2 - 1; i >= 0; i--){
        siftDown(arr, n, i);
    }
}
//save some space compared to heapsort by inserting all elements in priority queue
void heapSort_inPlace(int arr[], int n){
    
    heapify(arr, n);
    while(n > 0){
        swap(&arr[0], &arr[n-1]);
        n--;
        siftDown(arr, n, 0);
    }
}
int main()
{
    int arr[] = {12, 11, 13, 5, 6, 7,24,11,3,1};
    int n = sizeof(arr)/sizeof(arr[0]);

    heapSort_inPlace(arr, n);

    for (int i = 0; i < n; i++)
        std::cout << arr[i] << " ";
    std::cout << "\n";

    getchar();
    return 0;
}
/*
 Unsorted array
 23 | 1 | 6 | 19 | 14 | 18 | 8 | 24 | 15

 Heapified Array
 24 | 23 | 18 | 19 | 14 | 8 | 6 | 1 | 15

 First iteration
 Swap First (Biggest Element in Array) with last Element (could be anything)
 15 | 23 | 18 | 19 | 14 | 8 | 6 | 1 | 24

 heap condition is invalid

 Build heap on array.size - 2
 23 | 19 | 18 | 15 | 14 | 8 | 6 | 1 || 24

 Swap first and last element in smaller heap
 1 | 19 | 18 | 15 | 14 | 8 | 6 | 23 || 24

 Build heap on array.size - 3
 19 | 15 | 18 | 1 | 14 | 8 | 6 || 23 | 24

 Swap first and last element on that smaller heap and build heap on array.size - 4
 until you cant shrink the heap anymore, you'll receive
 || 1 | 8 | 14 | 15 | 18 | 19 | 23 | 24
 */