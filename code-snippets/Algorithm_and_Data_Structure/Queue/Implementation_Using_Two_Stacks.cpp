int main()

    int q, type, x;

    cin >> q;

    stack<int> st1;  //idea is st1 is FIFO while st2 is LIFO
    stack<int> st2;
    bool FIFO = false; //= 1 when LIFO

    for(int i = 0; i < q; i++){

        cin >> type;

        if(type == 1){
            cin >> x;

            /*
            if(FIFO == true){
                while(!st1.empty()){
                    st2.push(st1.top());
                    st1.pop();
                }
                swap(st1,st2);
                FIFO = false;
            }
            */

            st2.push(x);
        }
        else{

            /*
            if(FIFO == false){
                while(!st1.empty()){
                    st2.push(st1.top());
                    st1.pop();
                }
                swap(st1,st2);  //now is FIFO
                FIFO = true;
            }
            */
            if(st1.empty()){
                while(!st2.empty()){
                    st1.push(st2.top());
                    st2.pop();
                }
            }

            if(type == 2){
                if(!st1.empty())
                    st1.pop();
            }
            else if(type == 3){
                if(!st1.empty())
                    cout << st1.top() << endl;
            }
        }
    }

    return 0;
}
