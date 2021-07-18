// 自顶向下
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
 * @return {boolean}
 */
 var isBalanced = function(root) {
  const dfs = (root) => {
      if(!root) {
          return true;
      }
      return Math.abs(height(root.left) - height(root.right)) <= 1 && dfs(root.left) && dfs(root.right)
  }
  const height = (root) => {
      if(!root) {
          return 0;
      }
      return Math.max(height(root.left), height(root.right)) + 1;
  }
  return dfs(root);
};

// 自底向上
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
 * @return {boolean}
 */
 var isBalanced = function(root) {
  const dfsHeight = (root) => {
      if (!root) {
          return 0;
      }
      let leftHeight = dfsHeight(root.left);
      let rightHeight = dfsHeight(root.right);
      if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
          return -1;
      } else {
          return Math.max(leftHeight, rightHeight) + 1;
      }
  }
  return dfsHeight(root) >= 0;
};