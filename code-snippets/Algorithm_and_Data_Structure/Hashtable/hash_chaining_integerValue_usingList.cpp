#include <iostream>
#include <list>

//copy from geeksforgeek
class Hash{

    int BUCKET;    // No. of buckets
    std::list<int> *table;

public:

    Hash(int b){
        this->BUCKET = b;
        table = new std::list<int>[BUCKET];
    }
    void insertItem(int key){
        int index = hashFunction(key);
        table[index].push_back(key); 
    }
    void deleteItem(int key){
        // get the hash index of key
        int index = hashFunction(key);
        
        // find the key in (inex)th list
        std::list <int> :: iterator i;
        for (i = table[index].begin();
                i != table[index].end(); i++) {
            if (*i == key)
            break;
        }
        // if key is found in hash table, remove it
        if (i != table[index].end())
            table[index].erase(i);
        }
        // hash function to map values to ke
        int hashFunction(int x) {
            return (x % BUCKET);
    }
    void displayHash() {
        for (int i = 0; i < BUCKET; i++) {
            std::cout << i;
            for (auto x : table[i])
            std::cout << " --> " << x;
            std::cout << std::endl;
        }
    }
};

int main(){

  // array with keys 
  int a[] = {15, 11, 27, 8, 12};
  int n = sizeof(a)/sizeof(a[0]);

  Hash h(7);

  for (int i = 0; i < n; i++) 
    h.insertItem(a[i]);  

  h.deleteItem(12);
  h.displayHash();
 
  return 0;
}