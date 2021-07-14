// 深度优先遍历
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
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  let path = [];
  const dfs = (n) => {
      if (!n) return;
      path.push(n.val);
      if (n.left) dfs(n.left);
      if (n.right) dfs(n.right);
  }
  dfs(root);
  return path;
};

// 广度优先遍历
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
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
  let path = [];
  const bfs = (root) => {
      if (!root) return;
      let stack = [root];
      while (stack.length) {
          const n = stack.pop();
          path.push(n.val);
          if (n.right) stack.push(n.right);
          if (n.left) stack.push(n.left); 
      }
  }
  bfs(root);
  return path;
};