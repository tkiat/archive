
def main():
  x = '3141592653589793238462643383279502884197169399375105820974944592'
  y = '2718281828459045235360287471352662497757247093699959574966967627'

  #reference
  print(bigNumberMult(x, y))
  #real ans
  max = len(x) if (len(x) > len(y)) else len(y)
  print(karatsuba_recursive(x, y, max));
  
#output: string form of int(a) + int(b)
def bigNumberAdd(a, b):

  #if lengths not same, append zeroes
  a_length = len(a)
  b_length = len(b)
  while a_length > b_length:
    b = '0' + b;
    b_length += 1
  while b_length > a_length:
    a = '0' + a;
    a_length += 1;

  #perform straight addition like a primary school student
  result = "";
  i = a_length - 1;
  carry = 0;
  while i >= 0:

    sum = int(a[i]) + int(b[i]) + carry;
    carry = sum / 10;
    sum = sum % 10;
    result = str(sum) + result;
    i -= 1
  #add 1 at front if there is a carry left
  if carry > 0:
    result = '1' + result

  return result;

#output: string form of int(a) - int(b), require a >= b
def bigNumberSubtraction(a, b):

  #if lengths not same, append zeroes
  a_length = len(a)
  b_length = len(b)
  while a_length > b_length:
    b = '0' + b;
    b_length += 1
  while b_length > a_length:
    a = '0' + a;
    a_length += 1;

  #perform straight subtraction like a primary school student
  result = "";
  pos = a_length - 1;
  carry = 0;
  while pos >= 0:

    cur_digit = int(a[pos]) - int(b[pos]) - carry
    if cur_digit < 0:
      cur_digit += 10
      carry = 1
    else:
      carry = 0

    result = str(cur_digit) + result
    pos -= 1

  return result;

#output: string form of int(a) * int(b)
def bigNumberMult(a, b):

  result = '0'

  a_length = len(a)
  b_length = len(b)

  #perform straight multiplication like a primary school student, O(a_length * b_length)
  for i in range(b_length - 1, -1, -1):
    temp = ""
    carry = 0
    for j in range(a_length - 1, -1, -1):
      mul = int(a[j]) * int(b[i]) + carry
      carry = mul / 10
      mul = mul % 10
      temp = str(mul) + temp

    if carry > 0:
      temp = str(carry) + temp

    zero_offset = b_length - 1 - i
    while zero_offset > 0:
      temp += "0"
      zero_offset -= 1

    result = bigNumberAdd(result, temp)

  return result

#return true if x >= y
def isGreaterOrEqual(x, y):
  if len(x) > len(y):
    return True
  if len(x) < len(y):
    return False

  i = 0;
  while i < len(x):
    if x[i] > y[i]:
      return True
    if x[i] < y[i]:
      return False
    i += 1;
  #x = y
  return True

def karatsuba_recursive(x, y, n):

  if n == 2:
    return bigNumberMult(x, y);

  a = x[0: n/2]
  b = x[n/2: n]
  c = y[0: n/2]
  d = y[n/2: n]

  z2 = karatsuba_recursive(a, c, n/2);
  z0 = karatsuba_recursive(b, d, n/2);

  z1_part1 = bigNumberMult(bigNumberAdd(a,b), bigNumberAdd(c,d));
  z1_part2 = bigNumberAdd(z2, z0);

  z1 = ""
  if isGreaterOrEqual(z1_part1, z1_part2):
    z1 = bigNumberSubtraction(z1_part1, z1_part2)
  else:
    z1 = bigNumberSubtraction(z1_part2, z1_part1)

  i = n/2
  while i > 0:
    z1 += '0'
    z2 += '0'
    i -= 1
  i = n/2
  while i > 0:
    z2 += "0"
    i -= 1

  if(isGreaterOrEqual(z1_part1, z1_part2)):
	  return bigNumberAdd(z0, bigNumberAdd(z2, z1))
  else:
    return bigNumberAdd(z0, bigNumberSubtraction(z2, z1))

if __name__ == '__main__':
  main()
  
