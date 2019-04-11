// Undirected Graph class TODO: remove vertex
export default class Graph {
  /**
   * initialize a graph
   */
  constructor() {
    this.vertices = [];
    this.adjList = new Map();
  }

  /**
   * add vertice
   * @param {} vertice - vertice name (index)
   */
  addVertex(vertice) {
    this.vertices.push(vertice);
    this.adjList.set(vertice, []);
  }

  /**
   * connet two vertices
   * @param {*} v1 - name of first vertice
   * @param {*} v2 - name of second vertice
   */
  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2);
    this.adjList.get(v2).push(v1);
  }

  toString() {
    let str = '';
    this.vertices.forEach((v) => {
      str += `${v} -> ${this.adjList.get(v).toString()} \n`;
    });

    return str;
  }
}
