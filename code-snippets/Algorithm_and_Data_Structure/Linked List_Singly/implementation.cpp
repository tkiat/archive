#include <iostream>
#include <string>

using std::string;

template <typename T>
struct Node{
  T data;
  Node *next;
  Node(T val){
    this->data = val;
    next = nullptr;
  }
};
/*
Contain:
  void display()
  void add_front(T val) - add node at front
  void add_back(T val) - add node at back
  void add_pos(T val, size_t pos) - after adding this node, it will be at pos
  int find(T val) - return first index of node with value val or -1 if not found
  delete_val(T val) - delete all nodes with value val
*/
template <typename T>
class List{

  Node<T> *head;
public:
  List(){
    head = nullptr;
  }
  void display(){
    Node<T> *temp = head;
    while(temp != nullptr){
      std::cout << temp->data << " ";
      temp = temp->next;
    }
    std::cout << std::endl;
  }
  void add_front(T val){

    Node<T> *temp = new Node<T>(val);
    temp->next = head;
    head = temp;
  }
  void add_back(T val){

    if(head == nullptr){
      head = new Node<T>(val);
      return;
    }
    Node<T> *cur = head;
    while(cur->next != nullptr)
      cur = cur->next;
      
    Node<T> *temp = new Node<T>(val);
    cur->next = temp;
  }
  void add_pos(T val, size_t pos){

    if(head == nullptr){
      head = new Node<T>(val);
      return;
    }
    else if(pos == 0){
      add_front(val);
    }
    else{
      Node<T> *cur = head;
      while(--pos)
        cur = cur->next;
      
      Node<T> *temp = new Node<T>(val);
      temp->next = cur->next;
      cur->next = temp;
    }
  }
  int find(T val){

    Node<T> *cur = head;
    size_t pos = 0;
    while(cur != nullptr){
      if(cur->data == val)
        return pos;
      cur = cur->next;
      pos++;
    }
    return -1;
  }
  void delete_val(T val){
    
    Node<T> *temp = new Node<T>(val);
    temp->next = head;
    Node<T> *cur = temp;
    while(cur->next){
      if((cur->next)->data == val)
        cur->next = (cur->next)->next; 
      else
        cur = cur->next;
    }
    head = temp->next;
  }
};
int main(){

  List<string> list;
  //list.add_back("abc");
  list.add_back("dog");
  list.add_front("cat");
  list.add_front("dog");
  list.add_pos("lizard",2);
  list.add_pos("dog",2);
  list.display();
  std::cout << list.find("abc") << " " << list.find("dog") << "\n";
  std::cout << "delete \"dog\": ";
  list.delete_val("dog");
  list.display();
  std::cout << "delete \"lizard\": ";
  list.delete_val("lizard");
  list.display();

  return 0;
}