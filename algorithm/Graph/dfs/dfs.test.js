import { stackDfs, recursiveDfs } from './dfs';
import Graph from '../../../dataStructure/graph/graph';

const g = new Graph();
const vertices = ['A', 'B', 'C', 'D', 'E', 'F'];

// adding vertices
for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

describe('Graph DFS stack version', () => {
  it('return correct DFS traversal', () => {
    expect(stackDfs(g, 'A')).toEqual(['A', 'B', 'C', 'E', 'D', 'F']);
  });
});

describe('Graph DFS recursive version', () => {
  it('return correct DFS traversal', () => {
    expect(recursiveDfs(g, 'A')).toEqual(['A', 'B', 'C', 'E', 'D', 'F']);
  });
});
