string isBalanced(string s) {

	stack<char> st;
	int s_length = s.length();
	for(int i=0; i < s_length; i++){

		if (s[i] == '(' || s[i] == '[' || s[i] == '{'){
			st.push(s[i]);
		}
		else if(s[i] == ')' || s[i] == ']' || s[i] == '}'){
			if(st.empty()){
				st.push(s[i]);
				break;
			}
			if((st.top() == '(' && s[i] == ')') || (st.top() == '[' && s[i] == ']') || (st.top() == '{' && s[i] == '}')){
				st.pop();
			}
			else{
				st.push(s[i]);
				break;
			}
		}
	}
	if(st.size() == 0)
		return "YES";
	else
		return "NO";
}
