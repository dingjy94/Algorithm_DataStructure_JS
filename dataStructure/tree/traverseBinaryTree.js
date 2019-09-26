// pre-order
var preorderTraversal = function (root) {
  if (root === null) {
    return [];
  }
  const stack = [root], result = [];

  while (stack.length) {
    let node = stack.pop();
    result.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }
  return result;
};

// in-order
var inorderTraversal = function (root) {
  const result = [];
  const stack = [];

  let cur = root;

  while (cur !== null || stack.length !== 0) {
    while (cur !== null) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    result.push(cur.val);
    cur = cur.right;
  }

  return result;
};

// post-order
var postorderTraversal = function (root) {
  if (root === null) {
    return [];
  }

  let stack = [root], result = [];

  while (stack.length !== 0) {
    let node = stack.pop();
    result.unshift(node.val);
    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return result;
};

// level-order (BFS)
var levelOrder = function (root) {
  let result = [], queue = [];
  if (root === null) return result;
  queue.push(root);

  while (queue.length !== 0) {
    let level = [];
    let count = queue.length;
    while (count > 0) {
      const cur = queue.shift();
      level.push(cur.val);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
      count--;
    }
    result.push(level);
  }

  return result;
};
