// The only thing we need to know from inorder is that whether it's null
// from inorder and postorder
var buildTreeFromInAndPostorder = function (inorder, postorder) {
  let postIndex = postorder.length - 1;
  let inorderMap = new Map();

  const helper = (left, right) => {
    if (left > right) {
      return null;
    }

    let rootVal = postorder[postIndex];
    let node = new TreeNode(rootVal);
    let rootIndex = inorderMap.get(rootVal);
    postIndex -= 1;
    node.right = helper(rootIndex + 1, right);
    node.left = helper(left, rootIndex - 1);

    return node;
  }

  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  return helper(0, inorder.length - 1);
};


// from inorder and preorder
var buildTree = function (inorder, preorder) {
  let preIndex = 0;
  let inorderMap = new Map();

  const helper = (left, right) => {
    if (left > right) {
      return null;
    }

    let rootVal = preorder[preIndex];
    let node = new TreeNode(rootVal);
    let rootIndex = inorderMap.get(rootVal);
    preIndex += 1;
    node.left = helper(left, rootIndex - 1);
    node.right = helper(rootIndex + 1, right);

    return node;
  }

  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  return helper(0, inorder.length - 1);
};
