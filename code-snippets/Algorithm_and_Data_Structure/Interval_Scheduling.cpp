bool sortEndTimeAscending(Workshop ws1, Workshop ws2){
    return (ws1.endTime < ws2.endTime);
}

Available_Workshops* initialize (int start_time[], int duration[], int n){
    Available_Workshops* a = new Available_Workshops();
    a->n = n;
    for(int i = 0; i < n; i++){
        Workshop temp;
        temp.startTime = start_time[i];
        temp.duration = duration[i];
        temp.endTime = start_time[i] + duration[i];
        a->ws.push_back(temp);
    }
    //*must sort
    sort(a->ws.begin(), a->ws.end(), sortEndTimeAscending);
    return a;
}

int CalculateMaxWorkshops(Available_Workshops* ptr){
    //greedy algorihtm
    int i, j, max=0;

    // The first (current) activity always gets selected
    i = 0;
    max++;

    for (j = 1; j < ptr->n; j++){
        // select the earliest activity after the current activity
        if (ptr->ws[j].startTime >= ptr->ws[i].endTime){
            //cout<<ptr->ws[i].endTime <<"    " << ptr->ws[j].startTime<<"     max ++\n";
            max++;
            i=j;
        }
    }
    return max;
}
