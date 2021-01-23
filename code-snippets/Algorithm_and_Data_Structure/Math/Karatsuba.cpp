#include <iostream>
#include <string>

using std::string;

//output: string form of int(a) + int(b)
string bigNumberAdd(string a, string b) {

  //if lengths not same, append zeroes
	int a_length = a.length();
	int b_length = b.length();
	while (a_length > b_length){
    b = '0' + b;
    b_length++;
  }
  while (b_length > a_length){
    a = '0' + a;
		a_length++;
  }
  //perform straight addition like a primary school student
	string result = "";
	int i = a_length;
	int sum, carry = 0;
	while (i--) {
		sum = (a[i] - '0') + (b[i] - '0') + carry;
		carry = sum / 10;
		sum = sum % 10;
		result = std::to_string(sum) + result;
	}
  //add 1 at front if there is a carry left
	if(carry > 0)
		result.insert(0, "1");

	return result;
}
//output: string form of int(a) - int(b), require a >= b
string bigNumberSubtraction(string a, string b) {

  //if lengths not same, append zeroes
	int a_length = a.length();
	int b_length = b.length();
	while (a_length > b_length){
    b = '0' + b;
    b_length++;
  }
  while (b_length > a_length){
    a = '0' + a;
		a_length++;
  }
  //perform straight subtraction like a primary school student
	string result = "";
	int pos = a.length();
	int cur_digit, carry = 0;
	while (pos--) {
    
    cur_digit = a[pos] - b[pos] - carry;
    if(cur_digit < 0){
      cur_digit += 10;
      carry = 1;
    }
    else
      carry = 0;

		result = std::to_string(cur_digit) + result;
	}

	return result;
}
//output: string form of int(a) * int(b)
string bigNumberMult(string a, string b) {

	string result = "0";
	string temp;

	int a_length = a.length();
	int b_length = b.length();
	int zero_offset, mul, carry;

  //perform straight multiplication like a primary school student, O(a_length * b_length)
	for (int i = b_length - 1; i >= 0; i--) {

		temp = "";
		carry = 0;
		for (int j = a_length - 1; j >= 0; j--) {

			mul = (a[j] - '0') * (b[i] - '0') + carry;
			carry = mul / 10;
			mul = mul % 10;
			temp = std::to_string(mul) + temp;
		}
		if (carry > 0)
			temp.insert(0, std::to_string(carry));

		zero_offset = b_length - 1 - i;
		while (zero_offset--)
			temp += "0";

		result = bigNumberAdd(result, temp);
	}
	
	return result;
}
//return true if x >= y
bool isGreaterOrEqual(string x, string y){
  if(x.length() > y.length())
    return true;
  if(x.length() < y.length())
    return false;

  int i = 0;
  while(i < x.length()){
    if(x[i] > y[i])
      return true;
    else if(x[i] < y[i])
      return false;
    i++;
  }
  //x = y
  return true;
}
string karatsuba_recursive(string x, string y, int n) {

	if (n == 2)
		return bigNumberMult(x, y);

	string a = x.substr(0, n/2);
	string b = x.substr(n/2, n/2);
	string c = y.substr(0, n/2);
	string d = y.substr(n/2, n/2);

	string z2 = karatsuba_recursive(a, c, n/2);
	string z0 = karatsuba_recursive(b, d, n/2);

  string z1_part1 = bigNumberMult(bigNumberAdd(a,b), bigNumberAdd(c,d));
  string z1_part2 = bigNumberAdd(z2, z0);

  //string z1 = bigNumberAdd(karatsuba_recursive(a, d, n/2), karatsuba_recursive(b, c, n / 2));
  string z1;
  if(isGreaterOrEqual(z1_part1, z1_part2))
    z1 = bigNumberSubtraction(z1_part1, z1_part2);
  else
    z1 = bigNumberSubtraction(z1_part2, z1_part1);

  int i = n/2;
	while (i--) {
		z1 += "0";
		z2 += "0";
	}
	i = n / 2;
	while (i--)
		z2 += "0";

	string result;
  if(isGreaterOrEqual(z1_part1, z1_part2))
	  result = bigNumberAdd(z2, bigNumberAdd(z1, z0));
  else
    result = bigNumberAdd(z0, bigNumberSubtraction(z2, z1));

	return result;
}

int main(){

	string x, y;

	x = "3141592653589793238462643383279502884197169399375105820974944592";
	y = "2718281828459045235360287471352662497757247093699959574966967627";

  int max = (x.length() > y.length()) ? x.length() : y.length();

	std::cout << karatsuba_recursive(x, y, max);

	getchar();
}
