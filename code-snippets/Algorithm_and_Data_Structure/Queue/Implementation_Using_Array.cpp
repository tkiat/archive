#include <iostream>

#define MAX_QUEUE_SIZE 2

struct queue{

    int arr[MAX_QUEUE_SIZE];  //there is no variable size stack
    int _front = -1;
    int rear = -1;
    bool empty(){
        if(_front == -1 && rear == -1)
            return true;
        else
            return false;
    }
    void push(int x){
        if((rear + 1) % MAX_QUEUE_SIZE == _front){ //circular array
            std::cout << "Error: Queue overflow!" << std::endl;
            return;
        }
        else if(empty()){
            _front = 0;
            rear = 0;
        }
        else{
            rear = (rear + 1) % MAX_QUEUE_SIZE;
        }
        arr[rear] = x;
    }
    void pop(){
        if(empty()){
            std::cout << "Error: No element to pop!" << std::endl;
            return;
        }
        else if(_front == rear){
            _front = -1;
            rear = -1;
        }
        else{
            _front = (_front + 1) % MAX_QUEUE_SIZE;
        }
    }
    int front(){
        if(empty()){
            std::cout << "Error: No element at front!" << std::endl;
            return -999999;
        }
        else
            return arr[_front];
    }
    int back(){
        if(empty()){
            std::cout << "Error: No element at back" << std::endl;
            return -999999;
        }
        else
            return arr[rear];
    }
    int size(){
        if(empty()){
            return 0;
        }
        else if(rear >= _front){
            return rear - _front + 1;
        }
        else{
            return rear - _front + 1 + MAX_QUEUE_SIZE;
        }
    }
};

int main(){

    queue a;
    a.push(2);
    a.push(10);
    a.push(5);
    a.pop();
    a.push(7);
    std::cout << a.size() << " " << a.front() << " " << a.back() << " " << a.empty();

    getchar();
    return 0; 
}