bool sort_value_weight_ratios(pair<int,int> a1, pair<int,int> a2){
    return (double)a1.first/a1.second > (double)a2.first/a2.second; 
}

double get_optimal_value(int capacity, vector<int> weights, vector<int> values) {
  double value_in_sack = 0.0;
  double weight_in_sack = 0.0;

  int n = weights.size();
  vector<pair<int,int>> value_weight(n);
  for (int i = 0; i < n; i++){
    value_weight[i] = make_pair(values[i],weights[i]);
  }
  sort(value_weight.begin(), value_weight.end(), sort_value_weight_ratios);

  for (int i = 0; i < n; i++){
    if (weight_in_sack + value_weight[i].second <= capacity){
      weight_in_sack += value_weight[i].second;
      value_in_sack += value_weight[i].first;
    }
    else{
      value_in_sack += value_weight[i].first * ((double) (capacity - weight_in_sack) / value_weight[i].second);
      break;
    }
  }

  return round(value_in_sack * 10000.0)/10000.0;
}