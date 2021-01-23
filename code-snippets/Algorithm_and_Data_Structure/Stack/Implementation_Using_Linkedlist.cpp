#include <iostream>

struct node{

    int data;
    struct node* next;
};

struct stack{

    struct node* _top = nullptr;

    void push(int x){ 
        struct node* temp = (struct node*) malloc(sizeof(struct node));
        temp->data = x;
        temp->next = nullptr;
        if(_top != nullptr)
            temp->next = _top;
        _top = temp;
    }
    void pop(){
        struct node *temp;
        if(_top == nullptr){
            std::cout << "Error: No element to pop!" << std::endl;
            return;
        }
        temp = _top;
        _top = _top->next;
        free(temp);
    }
    bool empty(){
        if(_top == nullptr)
            return true;
        else
            return false; 
    }
    int top(){
        if(_top != nullptr)
            return _top->data;
        else{
            std::cout << "No element in stack!";
            return 0;
        }
    }
    int size(){  
        int numNodes = 0;
        struct node* temp = _top;
        while(temp != nullptr){
            numNodes++;
            temp = temp->next;
        }
        free(temp);
        return numNodes;
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