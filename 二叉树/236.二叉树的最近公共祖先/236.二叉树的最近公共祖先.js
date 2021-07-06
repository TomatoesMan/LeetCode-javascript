/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  const dfs = (n, p, q) => {
      if (!n || n == p || n == q) {
          return n;
      }
      let left = dfs(n.left, p, q);
      let right = dfs(n.right, p, q);
      if (left && right) {
          return n;
      }
      if (!left) {
          return right;
      }
      return left;
  }
  return dfs(root, p, q);
};