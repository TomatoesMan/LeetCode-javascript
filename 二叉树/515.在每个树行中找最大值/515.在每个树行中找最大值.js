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
 * @return {number[]}
 */
 var largestValues = function(root) {
  let res = [];
  const dfs = (root, level) => {
      if (!root) return;
      if (res[level] === undefined) {
          res[level] = root.val;
      } else {
          res[level] = Math.max(res[level], root.val);
      }
      dfs(root.left, level + 1);
      dfs(root.right, level + 1);
  }
  dfs(root, 0);
  return res;
};

// 方法二：广度优先遍历
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
 var largestValues = function(root) {
  let res = [];
  const bfs = (root) => {
      if (!root) return;
      let queue = [[root, 0]];
      while (queue.length) {
          let len = queue.length;
          while (len--) {
              const [node, level] = queue.shift();
              if (res[level] === undefined) {
                  res[level] = node.val;
              } else {
                  res[level] = Math.max(res[level], node.val);
              }
              if (node.left) queue.push([node.left, level + 1]);
              if (node.right) queue.push([node.right, level + 1]);
          }
      }
  }
  bfs(root);
  return res;
};