#include <iostream>
#include <climits>

#define MAX_HEAP_SIZE 100

void swap(int *x, int *y);

//this is max-heap
//heap is one efficient implementation of priority queue
struct maxHeap{

    int heap[MAX_HEAP_SIZE];
    int currentSize = -1;
    int parent(int i){  //i is index
        return i/2;
    }
    int leftChild(int i){
        return 2*i;
    }
    int rightChild(int i){
        return 2*i + 1;
    }
    void siftUp(int i){
        //change > to < to become minHeap
        while(i > 0 && heap[i] > heap[parent(i)]){
            swap(&heap[parent(i)], &heap[i]);
            i = parent(i);
        }
    }
    void siftDown(int i){

        int maxIndex = i;
        int l = leftChild(i);
        //change > to < to become minHeap
        if (l <= currentSize && heap[l] > heap[maxIndex]){
            maxIndex = l;
        }
        int r = rightChild(i);
        if (r <= currentSize && heap[r] > heap[maxIndex]){
            maxIndex = r;
        }
        if (i != maxIndex){
            swap(&heap[i], &heap[maxIndex]);
            siftDown(maxIndex);
        }
    }
    void insert(int x){ //x is value
        if(currentSize == MAX_HEAP_SIZE - 1){
            std::cout << "Error!: Heap is full\n";
            return;
        }
        currentSize++;
        heap[currentSize] = x;
        siftUp(currentSize);
    }
    int extractMax(){
        int result = heap[0];
        heap[0] = heap[currentSize];
        currentSize--;
        siftDown(0);
        return result;
    }
    int getMax(){
        return heap[0];
    }
    void remove(int i){
        heap[i] = INT_MAX;
        siftUp(i);
        extractMax();
    }
    void changePriority(int i, int x){
        int oldX = heap[i];
        heap[i] = x;
        if(x > oldX)
            siftUp(i);
        else
            siftDown(i);
    }
    void print(){
        if(currentSize == -1){
            std::cout << "Empty heap!\n";
            return;
        }
        for(int i = 0; i <= currentSize; i++){
            std::cout << heap[i] << " ";
        }
        std::cout << std::endl;
    }
    int size(){
        return currentSize;
    }
};

void swap(int *x, int *y){
    int temp = *x;
    *x = *y;
    *y = temp;
}

//Not in-place: uses additional space to store the priority queue
//better to use in-place heap sort instead
void heapSort(int arr[], int n){
    
    struct maxHeap temp;
    for (int i = 0; i < n; i++){
        temp.insert(arr[i]);
    }
    for (int i = n; i >= 0; i--)
        arr[i] = temp.extractMax();
}

int main(){

    maxHeap a;
a.print();
    a.insert(1);
    a.insert(2);
    a.insert(3);
    a.insert(4);
a.print();
    a.insert(5);
a.print();
    a.remove(2);
a.print();
    a.extractMax();
a.print();
    a.insert(6);
    a.insert(7);
    a.insert(8);
    a.insert(9);
a.print();

    int arr[] = {12, 11, 13, 5, 6, 7};

    int n = sizeof(arr)/sizeof(arr[0]);
    heapSort(arr, n);

    for (int i = 0; i < n; i++)
        std::cout << arr[i] << " ";
    std::cout << "\n";

    getchar();
    return 0;
}