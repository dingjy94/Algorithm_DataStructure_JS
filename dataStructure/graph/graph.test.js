import Graph from './graph';

describe('Graph', () => {
  it('should init a empty queue', () => {
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

    const graphStr = 'A -> B,D,E \nB -> A,C \nC -> B,E,F \nD -> A,E \nE -> A,D,F,C \nF -> E,C \n';

    expect(g.toString()).toBe(graphStr);
  });
});
