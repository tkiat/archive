#include <string>
#include <iostream>
#include <vector>
#include <map>

using std::map;
using std::vector;
using std::string;

typedef map<char, int> edges;
typedef vector<edges> trie;

//Max time used: 0.12/0.50, max memory used: 67584000/536870912
trie build_trie(vector<string> &patterns) {

  trie _trie;

  int ind = 0;
  for(int i = 0; i < patterns.size(); i++){
    int temp = 0;
    int offset = 0;

    //step 1: neglect all what were found
    for(char c : patterns[i]){

      while(temp + 1 > _trie.size()){ //prevent segmentation fault
        _trie.push_back(map<char, int>());
      }
      if(_trie[temp].find(c) != _trie[temp].end()){
        temp = _trie[temp][c];
        offset++;
      }
      else
        break;
    }

    //step 2 :insert the rest of which is not found
    for(int j = offset; j < patterns[i].length(); j++){

      while(temp + 1 > _trie.size()){ //prevent segmentation fault
        _trie.push_back(map<char, int>());
      }
      _trie[temp].insert(std::pair<char,int>(patterns[i][j], ++ind));
      temp = ind;
    }
  }
  return _trie;
}

int main() {
  size_t n;
  std::cin >> n;
  vector<string> patterns;
  for (size_t i = 0; i < n; i++) {
    string s;
    std::cin >> s;
    patterns.push_back(s);
  }

  trie t = build_trie(patterns);
  for (size_t i = 0; i < t.size(); ++i) {
    for (const auto & j : t[i]) {
      std::cout << i << "->" << j.second << ":" << j.first << "\n";
    }
  }

  return 0;
}
/*Example input
3
ATAGA
ATC
GAT
*/
