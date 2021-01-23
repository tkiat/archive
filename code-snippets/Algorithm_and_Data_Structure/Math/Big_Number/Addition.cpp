#include <iostream>
#include <string>

std::string bigNumberAddition(std::string a, std::string b){

	int a_length = a.length();
	int b_length = b.length();

	//match length with 0 offets
	while (a_length != b_length) {

		if (a_length > b_length) {
			b = '0' + b;
			b_length++;
		}
		else {
			a = '0' + a;
			a_length++;
		}
	}

	//perform real stuff
	std::string result = "";
	int i = a_length;
	int sum, carry = 0;
	while (i--){
		sum = (a[i] - '0') + (b[i] - '0') + carry;
		carry = sum / 10;
		sum = sum % 10;
		result = std::to_string(sum) + result;
	}

	if(carry > 0)
		result.insert(0, "1");

	return result;
}

int main(){

	std::string a, b, sol;
	
	a = "31415926535897932384626433832795";
	b = "22884197169399375105820974944592";

	sol = bigNumberAddition(a,b);
	std::cout << sol << std::endl;

	getchar();
}
