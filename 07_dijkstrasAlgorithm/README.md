# Summary

With an undirected graph, each edge adds another cycle. Dijkstra’s algorithm only works with *directed acyclic graphs*, called DAGs for short.

You *can’t use negative-weight edges with Dijkstra’s algorithm*. If you want to find the shortest path in a graph that has negative-weight edges, there’s an algorithm for that! It’s called the *Bellman-Ford algorithm*.

**Recap**

- Breadth-first search is used to calculate the shortest path for an unweighted graph.
- Dijkstra’s algorithm is used to calculate the shortest path for a weighted graph.
- Dijkstra’s algorithm works when all the weights are positive.
- If you have negative weights, use the Bellman-Ford algorithm.

