// 方法一：DFS
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
 * @return {number}
 */
 var maxDepth = function(root) {
  let res = 0;
  const dfs = (n, l) => {
      if (!n) return; 
      if (!n.left && !n.right) {
          res = Math.max(res, l);
      }
      dfs(n.left, l + 1);
      dfs(n.right, l + 1);
  }
  dfs(root, 1);
  return res;
};

// 方法二：BFS
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
 * @return {number}
 */
 var maxDepth = function(root) {
  let res = 0;
  const bfs = (root) => {
      if (!root) return;
      const queue = [root];
      while (queue.length) {
          res += 1;
          let len = queue.length;
          console.log(queue)
          while (len--) {
              const n = queue.shift();
              if (n.left) {
                  queue.push(n.left);
              }
              if (n.right) {
                  queue.push(n.right);
              }
          }
      }
  }
  bfs(root);
  return res;
};