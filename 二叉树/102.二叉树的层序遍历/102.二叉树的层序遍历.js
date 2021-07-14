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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  let path = [];
  const dfs = (n, deep) => {
      if (!n) return;
      if (!path[deep]) {
          path.push([n.val])
      } else {
          path[deep].push(n.val)
      }
      if (n.left) dfs(n.left, deep + 1);
      if (n.right) dfs(n.right, deep + 1);
  }
  dfs(root, 0);
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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  let path = [];
  const bfs = (root) => {
      if (!root) return;
      let queue = [root];
      while (queue.length) {
          let len = queue.length;
          path.push([]);
          while(len--) {
              let n = queue.shift();
              path[path.length - 1].push(n.val);
              if (n.left) queue.push(n.left);
              if (n.right) queue.push(n.right);
          }
      }
  }
  bfs(root);
  return path;
};