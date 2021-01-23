#include <iostream>

struct node{
    int data;
    struct node* next;
};

struct queue{

    struct node* _front = nullptr;
    struct node* rear = nullptr;

    void push(int x){
        struct node* temp = (struct node*) malloc(sizeof(struct node));
        temp->data = x;
        temp->next = nullptr;
        if(_front == nullptr && rear == nullptr){
            _front = temp;
            rear = temp;
            return; 
        }
        rear->next = temp;
        rear = temp;
    }
    bool empty(){
        if(_front == nullptr)
            return true;
        else
            return false; 
    }
    void pop(){
        struct node *temp = _front;
        if(empty()){
            std::cout << "Error: No element to pop!" << std::endl;
            return;
        }
        else if(_front == rear){
            _front = nullptr;
            rear = nullptr;
        }
        else{
            _front = _front->next;
        }
        free(temp);
    }
    int front(){
        if(empty()){
            std::cout << "No element in queue!";
            return 0;
        }
        else{
            return _front->data;
        }
    }
    int back(){
        if(empty()){
            std::cout << "No element in queue!";
            return 0;
        }
        else{
            return rear->data;
        }
    }
    int size(){  
        int numNodes = 0;
        struct node* temp = _front;
        while(temp != nullptr){
            numNodes++;
            temp = temp->next;
        }
        free(temp);
        return numNodes;
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