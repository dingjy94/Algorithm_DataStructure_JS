# Breadth-First-Search (BFS)
Search algorithm used to traverse or serach through a graph. Start from a grpah vertex, and **traverse** all this vertext's neighboor nodes first, then move to next level.

## Implement Keys
- For graph, we need to maintain a `visited array` to record which node is visited.
- For BFS, we use queue. The FIFO data structure promise to traverse all nodes in the higher level before go to next level.
- [source code](bfs.js) (I used my own queue, but in face we can just use JavaScript's array to simulate a queue, use `shift` to dequeue, `push` to enqueue).

## Questions
- [clone graph](https://leetcode.com/problems/clone-graph/)

## Resource
- [Graph Traversals - Breadth First and Depth First (Youtube)](https://www.youtube.com/watch?v=bIA8HEEUxZI)
- [The Breadth First search algorithm (Khanacademy)](https://www.khanacademy.org/computing/computer-science/algorithms/breadth-first-search/a/the-breadth-first-search-algorithm)
- [GeeksforGeeks](https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/)
