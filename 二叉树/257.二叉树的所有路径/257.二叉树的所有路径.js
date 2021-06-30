// 方法一：深度优先遍历
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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
  let res = [];
  const dfs = (n, path) => {
      if (!n) return;
      path += n.val;
      if (!n.left && !n.right) {
          res.push(path);
      }
      path += '->'
      dfs(n.left, path);
      dfs(n.right, path);
  }
  dfs(root, '');
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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
  let res = [];
  const bfs = (root) => {
      if (!root) return;
      let queue = [[root, '']];
      while(queue.length) {
          let [n, path] = queue.shift();
          path += n.val;
          if (!n.left && !n.right) {
              res.push(path)
          }
          path += '->';
          if (n.left) queue.push([n.left, path])
          if (n.right) queue.push([n.right, path]);
      }
  }
  bfs(root);
  return res;
};
