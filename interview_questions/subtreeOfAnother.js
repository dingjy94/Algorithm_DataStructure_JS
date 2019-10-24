/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

const equals = (s, t) => {
  if (s === null && t === null) {
    return true;
  }

  if (s === null || t === null) {
    return false;
  }

  return (s.val === t.val) && (equals(s.left, t.left)) && (equals(s.right, t.right));
};

var isSubtree = function (s, t) {
  return s !== null && (equals(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t));
};
