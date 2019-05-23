# House Robber III (lc337)
The thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.

Determine the maximum amount of money the thief can rob tonight without alerting the police.
## Find sub solution
For each step, the result is `Math.max(root + grandChildren, children)`. So let's do a recursion (DFS) solution first.

## Recursion
```javascript
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
var rob = function(root) {
  if (root === null) {
    return 0;
  }

  if (root.left === null && root.right === null) {
    return root.val;
  }

  if (root.left === null) {
    return Math.max(rob(root.right), rob(root.right.left) + rob(root.right.right) + root.val);
  }

  if (root.right === null) {
    return Math.max(rob(root.left), rob(root.left.left) + rob(root.left.right) + root.val);
  }

  return Math.max(rob(root.left.left) + rob(root.left.right) + rob(root.right.left) + rob(root.right.right) + root.val, rob(root.left) + rob(root.right));
};
```
Althogh this solution past the leetcode test cases, this recursion obviously has repeat computaions. Time Complexity is O(2^n), which is not good. We can easily get to an optimization using memoriztion (DP).

## DP solution with map
```javascript
const robHelper = (root, memo) => {
   if (root === null) {
    return 0;
  }

  if (memo.has(root)) {
    return memo.get(root);
  }

  let val = 0;

  if (root.left !== null) {
    val += robHelper(root.left.left, memo) + robHelper(root.left.right, memo);
  }

  if (root.right !== null) {
    val += robHelper(root.right.left, memo) + robHelper(root.right.right, memo);
  }

  const max = Math.max(val + root.val, robHelper(root.left, memo) + robHelper(root.right, memo));
  memo.set(root, max);

  return max;
};

var rob = function(root) {
  const memo = new Map();

  return robHelper(root, memo);
};
```
So for each root, we store its max amount in a map, and time complexity is O(n). We can still do some improvement. For each step, we only need to know its children and grandchildren. However, it's hard to detect the grandchildren value. So let's think in an other way: each step only need to know two things: the max amount include both child and exclude both child. So, for each step, we can return an object or array that include two value: max amount include current root and exclude current root.

```javascript
const robHelper = (root) => {
  let include = 0, exclude = 0;

  if (root === null) {
    return {include, exclude};
  }

  let {include: leftInclude, exclude: leftExclude} = robHelper(root.left); // let is required, {oldname: newName}
  let {include: rightInclude, exclude: rightExclude} = robHelper(root.right);

  include = root.val + rightExclude + leftExclude;
  exclude = Math.max(leftInclude, leftExclude) + Math.max(rightInclude, rightExclude);

  return {include, exclude};
};

var rob = function(root) {
  ({include, exclude} = robHelper(root)); //The parentheses ( ... ) around the assignment statement are required when using object literal destructuring assignment without a declaration.

  return Math.max(include, exclude);
};
```
This is the solution use object, which I think is more clear than array.
However, there is an interesting fact is that although this solution's space complexity seems O(1), at least for javascript, it's not really perform better than the map solution. I think this may because the GC of JavaScript doesn't work as expect. Also, for this problem, it's hard to get a bottom-up solution, which means we cannont avoid stack cost.
