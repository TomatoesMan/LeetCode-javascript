/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
  const successor = (root) => {
      root = root.right;
      while (root.left != null) root = root.left;
      return root.val;
  }
  const predecessor = (root) => {
      root = root.left;
      while (root.right !== null) root = root.right;
      return root.val;
  }
  const dfs = (n, key) => {
      if (!n) return null;
      if (key > n.val) {
          n.right = dfs(n.right, key);
      } else if (key < n.val) {
          n.left = dfs(n.left, key);
      } else {
          if (!n.right && !n.left) {
              n = null;
          } else if (n.right) {
              n.val = successor(n);
              n.right = dfs(n.right, n.val);
          } else if (n.left) {
              n.val = predecessor(n);
              n.left = dfs(n.left, n.val);
          }
      }
      return n;
  }
  return dfs(root, key);
};
