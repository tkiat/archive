#include <iostream>
#include <string>

std::string bigNumberAdd(std::string a, std::string b) {

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

	std::string result = "";
	int i = a_length;
	int sum, carry = 0;

	while (i--) {
		sum = (a[i] - '0') + (b[i] - '0') + carry;
		carry = sum / 10;
		sum = sum % 10;
		result = std::to_string(sum) + result;
	}

	if(carry > 0)
		result.insert(0, "1");

	return result;
}

std::string bigNumberMult(std::string a, std::string b) {

	std::string result = "0";
	std::string temp;

	int a_length = a.length();
	int b_length = b.length();
	int zero_offset, mul, carry;

	for (int i = b_length - 1; i >= 0; i--) {

		temp = "";
		carry = 0;
		for (int j = a_length - 1; j >= 0; j--) {

			mul = (a[j] - '0') * (b[i] - '0') + carry;
			carry = mul / 10;
			mul = mul % 10;
			temp = std::to_string(mul) + temp;
		}
		if (carry > 0) {
			temp.insert(0, std::to_string(carry));
		}
		zero_offset = b_length - 1 - i;
		while (zero_offset--) {
			temp += "0";
		}
		result = bigNumberAdd(result, temp);
	}
	
	return result;
}

int main(){

	std::string a, b, sol;

	a = "31415926535897932384626433832795";
	b = "22884197169399375105820974944592";

	sol = bigNumberMult(a,b);

	std::cout << sol << std::endl;

	getchar();
}
