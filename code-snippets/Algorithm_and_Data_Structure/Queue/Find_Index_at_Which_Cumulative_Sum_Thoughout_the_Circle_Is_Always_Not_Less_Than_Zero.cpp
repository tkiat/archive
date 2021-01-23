int truckTour(vector<vector<int>> petrolpumps) {

    queue<int> x, circle;

    int petrolpumps_size = petrolpumps.size();

    for(int i = 0; i< petrolpumps_size; i++){
        x.push(petrolpumps[i][0] - petrolpumps[i][1]);
    }

    long long sum;
    int j, index = 0;
    bool pass;
    for(int i = 0; i < petrolpumps_size; i++){
        circle = x;
        sum = 0;
        j = 0;
        pass = true;
        while(j < petrolpumps_size){
            //queue: front (come first out first) <- ... <- last (come last out last)
            sum += circle.front();
            circle.pop();
            j++;
            if(sum < 0){
                pass = false;
                break;
            }
        }
        if(pass == true){
            return index;
        }
        //start at the next point after fuel depleted
        while(j--){
            x.push(x.front());
            x.pop();
            index++;
        }
    }
    return 0;
}
