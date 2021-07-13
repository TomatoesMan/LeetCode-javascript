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
 * @return {number}
 */
 var sumNumbers = function(root) {
  let res = '';
  let sum = 0;
  const dfs = (n, res) => {
      if (!n) return 0;
      if (!n.left && !n.right) {
          sum += Number(res + n.val);
      } else {
          res = res + n.val;
      }
      dfs(n.left, res);
      dfs(n.right, res);
      return sum;
  }
  return dfs(root, res);
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
 * @return {number}
 */
 var sumNumbers = function(root) {
  let res = '';
  let sum = 0;
  const bfs = (root, res) => {
      let queue = [[root, res]];
      while (queue.length) {
          let [n, res] = queue.shift();
          if (!n.left && !n.right) {
              sum += Number(res + n.val);
          } else {
              res += n.val;
          }
          if (n.left) queue.push([n.left, res]);
          if (n.right) queue.push([n.right, res]);
      }
      return sum;
  }
  return bfs(root, res);
};