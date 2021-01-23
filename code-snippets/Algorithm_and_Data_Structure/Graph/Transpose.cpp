Graph Graph::getTranspose(vector<vector<int>> adj, int N){

	Graph adj_reverse(N);
	for (int v = 0; v < N; v++){

		// Recur for all the vertices adjacent to this vertex
		for (auto it = adj[v].begin(); it != adj[v].end(); it++){

			adj_reverse.adj[*it].push_back(v);
		}
	}
	return adj_reverse;
}