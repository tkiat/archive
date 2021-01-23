#include <iostream>
#include <list>
#include <string>

using std::string;

class hash{

    int numBucket;
    std::list<string> *table;
    static const size_t p = 1000000007;
    static const size_t x = 263;

public:

    hash(int b){
        this->numBucket = b;
        table = new std::list<string>[numBucket];
    }
    void add(string value){
        //ignore query if there is already such string in the hash table
        if(find(value) == "yes")
            return;
        int index = hashFunction(value);
        table[index].push_back(value);
    }
    int hashFunction(string value) {   //map value to key
        unsigned long long h_S = 0;
        //feed last char first
        for (int i = static_cast<int> (value.size()) - 1; i >= 0; i--){
            h_S = (h_S * x + value[i]) % p;
        }
        return h_S % numBucket;
    }
    string find(string value) {   //map value to key

        int index = hashFunction(value);
        std::list <string> :: iterator it;
        for (it = table[index].begin(); it != table[index].end(); it++) {
            if (*it == value)
                return "yes";
        }
        return "no";
    }
    void del(string value){

        int index = hashFunction(value);
        //find and delete
        std::list <string> :: iterator it;
        for (it = table[index].begin(); it != table[index].end(); it++) {
            if (*it == value){//if found
                table[index].erase(it);
                break;
            }
        }
    }
    void check(int index) {
        //output the content of the 𝑖-th list in the table in reverse order
        std::list <string> :: reverse_iterator it;
        for (it = table[index].rbegin(); it != table[index].rend(); it++)
            std::cout << *it << " ";
        std::cout << std::endl;
    }
    void displayHash() {
        for (int i = 0; i < numBucket; i++) {
            std::cout << i;
            for (string x : table[i])
                std::cout << " --> " << x;
            std::cout << std::endl;
        }
    }
};

int main(){

    // array with keys
    string a[] = {"world", "HellO", "cc"};
    int n = sizeof(a)/sizeof(a[0]);

    hash h(7);

    for (int i = 0; i < n; i++)
        h.add(a[i]);

    h.displayHash();

    std::cout << h.find("forld") << "\n";
    std::cout << h.find("world") << "\n";

    h.del("world");
    h.displayHash();

    h.check(1);
    h.check(5);

    return 0;
}
