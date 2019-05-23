# Binary Tree Maximum Path Sum ([lc124](https://leetcode.com/problems/binary-tree-maximum-path-sum/))
## Question
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

## Solution
```JavaScript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxPathSum = function(root) {
  let result = Number.MIN_SAFE_INTEGER;

  const helper = (root) => {
    if (root === null) {
      return 0;
    }

    const leftSum = helper(root.left);
    const rightSum = helper(root.right);
    const curNodeMax = Math.max(root.val, root.val + leftSum, root.val + rightSum);

    // the value of the subtree include current node and both children
    const curNodeAsTop = root.val + leftSum + rightSum;
    result = Math.max(result, curNodeMax, curNodeAsTop)

    // return the max of rote whose top is current node
    return curNodeMax;
  };

  helper(root);
  return result;
};
```

## Key Points
- A DFS, but the value is sum of route instead of subtree, which means for each node, only two of three related route (left, right, parent) can be counted
- Do some 'side effect' thing in recursion. Not only consider each step's return value.
