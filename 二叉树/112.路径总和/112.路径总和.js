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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
  if (!root) return [];
  let res = false;
  const dfs = (n, s) => {
      if (!n.left && !n.right && s === targetSum) {
         res = true;
      }
      if (n.left) dfs(n.left, n.left.val + s);
      if (n.right) dfs(n.right, n.right.val + s);
  }
  dfs(root, root.val);
  return res;
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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
  if (!root) return [];
  let res = false;
  const bfs = root => {
      let queue = [[root, root.val]];
      while (queue.length) {
          const [n, s] = queue.shift();
          if (!n.left && !n.right && s === targetSum) {
              res = true;
          }
          if (n.left) queue.push([n.left, s + n.left.val])
          if (n.right) queue.push([n.right, s + n.right.val]);
      }
  }
  bfs(root);
  return res;
};