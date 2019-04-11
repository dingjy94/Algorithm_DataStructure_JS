// return a BFS traversal of a graph
import Queue from '../../../dataStructure/queue/queue';

const bfs = (graph, start) => {
  const visited = [];
  const result = [];
  const queue = new Queue(); // can also use JavaScript array

  queue.add(start);
  const startIndex = graph.vertices.indexOf(start);
  visited[startIndex] = 1;

  while (!queue.isEmpty()) {
    const cur = queue.remove();
    result.push(cur);
    const index = graph.vertices.indexOf(cur);
    visited[index] = 1;

    const neighbors = graph.adjList.get(cur);
    neighbors.forEach((n) => {
      const nIndex = graph.vertices.indexOf(n);
      if (visited[nIndex]) {
        return;
      }

      visited[nIndex] = 1;
      queue.add(n);
    });
  }

  return result;
};

export default bfs;
