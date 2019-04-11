// return a DFS traversal of given graph
import Stack from '../../../dataStructure/stack/stack';

const stackDfs = (graph, start) => {
  const stack = new Stack();
  const visited = [];
  const result = [];

  const startIndex = graph.vertices.indexOf(start);
  visited[startIndex] = 1;
  stack.push(start);
  result.push(start);

  while (!stack.isEmpty()) {
    const cur = stack.peek();
    const index = graph.vertices.indexOf(cur);
    if (!visited[index]) {
      result.push(cur);
      visited[index] = 1;
    }

    const neighbors = graph.adjList.get(cur);
    const firstUnvisitedN = neighbors.find((n) => {
      const nIndex = graph.vertices.indexOf(n);
      return !visited[nIndex];
    });
    if (firstUnvisitedN) {
      stack.push(firstUnvisitedN);
    } else {
      stack.pop();
    }
  }

  return result;
};

// recursive version
const recursiveDfsHelper = (graph, cur, visited, result) => {
  visited[graph.vertices.indexOf(cur)] = 1; // eslint-disable-line no-param-reassign
  result.push(cur);
  const neighbors = graph.adjList.get(cur);
  neighbors.forEach((n) => {
    if (!visited[graph.vertices.indexOf(n)]) {
      recursiveDfsHelper(graph, n, visited, result);
    }
  });
};

const recursiveDfs = (graph, start) => {
  const visited = [];
  const result = [];

  recursiveDfsHelper(graph, start, visited, result);

  return result;
};

export { stackDfs, recursiveDfs };
