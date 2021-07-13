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
 var rightSideView = function(root) {
  let path = [];
  const dfs = (n, deep) => {
      if (!n) return;
      if (!path[deep]) {
          path[deep] = n.val
      }
      if (n.right) dfs(n.right, deep + 1);
      if (n.left) dfs(n.left, deep + 1)
  }
  dfs(root, 0)
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
 var rightSideView = function(root) {
  let res = [];
  const bfs = (root) => {
      if (!root) return;
      let queue = [[root, 0]];
      while (queue.length) {
          let [n, deep] = queue.shift();
          if (!res[deep]) {
              res[deep] = n.val;
          }
          if (n.right) queue.push([n.right, deep + 1]);
          if (n.left) queue.push([n.left, deep + 1])
      }
  }
  bfs(root);
  return res;
};