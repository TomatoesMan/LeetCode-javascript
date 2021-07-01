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
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
  let res = 0;
  const dfs = (n, isLeft) => {
      if (!n) return;
      if (!n.left && !n.right && isLeft) {
          res += n.val;
      }
      dfs(n.left, true);
      dfs(n.right, false);
  }
  dfs(root, false);
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
 * @return {number}
 */
 var sumOfLeftLeaves = function(root) {
  let res = 0;
  const bfs = (root) => {
      if (!root) return;
      const queue = [[root, false]];
      while (queue.length) {
          const [n, isLeft] = queue.shift(); 
          if (!n.left && !n.right && isLeft) {
              res += n.val;
          }
          if (n.left) queue.push([n.left, true]);
          if (n.right) queue.push([n.right, false]);
      } 
  }
  bfs(root);
  return res;
};