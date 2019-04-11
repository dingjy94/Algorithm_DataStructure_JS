import bfs from './bfs';
import Graph from '../../../dataStructure/graph/graph';

describe('Graph BFS', () => {
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


  it('return correct BFS traversal', () => {
    expect(bfs(g, 'A')).toEqual(['A', 'B', 'D', 'E', 'C', 'F']);
  });
});
