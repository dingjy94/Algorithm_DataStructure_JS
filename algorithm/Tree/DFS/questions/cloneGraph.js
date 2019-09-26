/**
 * lc133 clone graph (https://leetcode.com/problems/clone-graph/)
 * Given a reference of a node in a connected undirected graph,
 * return a deep copy (clone) of the graph.
 * Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
 *
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
const clone = (node, map) => {
  if (node === null) {
    return null;
  }

  if (map.has(node.val)) {
    return map.get(node.val);
  }

  const newNode = new Node(node.val, []);
  map.set(node.val, newNode);
  for (let next of node.neighbors) {
    newNode.neighbors.push(clone(next, map));
  }

  return newNode;
}

var cloneGraph = function (node) {
  return clone(node, new Map());
};
