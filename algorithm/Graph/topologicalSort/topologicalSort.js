// lc207 Course Scheduel (https://leetcode.com/problems/course-schedule/)
// BFS: compute indegrees
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const indegrees = [], preMatrix = [];
  for (let [cur, pre] of prerequisites) {
    if (!indegrees[cur]) {
      indegrees[cur] = 0;
    }
    indegrees[cur]++;
    if (!preMatrix[cur]) {
      preMatrix[cur] = [];
    }

    preMatrix[cur][pre] = 1;
  }

  const queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (!indegrees[i]) {
      queue.push(i);
    }
  }

  let count = 0;
  while (queue.length) {
    const cur = queue.shift();
    count += 1;
    for (let i = 0; i < numCourses; i++) {
      if (preMatrix[i] && preMatrix[i][cur]) {
        indegrees[i] -= 1;
        if (indegrees[i] === 0) {
          queue.push(i);
        }
      }
    }
  }

  return count === numCourses;
};

// DFS
const Node = function (val) {
  this.val = val;
  this.preRequists = [];
  this.done = false;
  this.todo = false;
}

const checkCycleExist = (cur, nodeStores) => {
  if (cur.done) {
    return false;
  }

  if (cur.todo) {
    return true;
  }

  cur.todo = true;
  for (let next of cur.preRequists) {
    if (checkCycleExist(nodeStores.get(next), nodeStores)) {
      return true;
    }
  }

  cur.todo = false;
  cur.done = true;
  return false;
};

var canFinish = function (numCourses, prerequisites) {
  const nodeStores = new Map();
  if (prerequisites.length === 0) {
    return true;
  }

  for (let [cur, pre] of prerequisites) {
    if (!nodeStores.has(pre)) {
      nodeStores.set(pre, new Node(pre));
    }

    if (!nodeStores.has(cur)) {
      nodeStores.set(cur, new Node(cur));
    }

    nodeStores.get(cur).preRequists.push(pre);
  }

  for (let i = 0; i < numCourses; i++) {
    if (!nodeStores.has(i)) {
      continue;
    }

    if (checkCycleExist(nodeStores.get(i), nodeStores)) {
      return false;
    }
  }

  return true;
};
