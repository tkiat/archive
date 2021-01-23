#include <iostream>

#define MAX_STACK_SIZE 100

struct stack{

    int arr[MAX_STACK_SIZE];  //there is no variable size stack
    int _top = -1;
    void push(int x){
        if(_top == MAX_STACK_SIZE - 1){
            std::cout << "Error: Stack overflow!" << std::endl;
            return;
        }
        arr[++_top] = x;
    }
    void pop(){
        if(_top == -1){
            std::cout << "Error: No element to pop!" << std::endl;
            return;
        }
        _top--; 
    }
    int top(){
        return arr[_top];
    }
    bool empty(){
        if(_top == -1)
            return true;
        else
            return false;
    }
    int size(){
        return _top + 1;
    }
};

int main(){

    stack a;
    a.push(2);
    a.push(10);
    a.push(5);
    a.pop();
    a.push(7);
    std::cout << a.size() << " " << a.top() << " " << a.empty();

    getchar();
    return 0; 
}