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
 var averageOfLevels = function(root) {
  let res = [];
  const dfs = (root, deep) => {
      if (!root) return;
      if (res[deep] !== undefined) {
          res[deep] = res[deep].concat(root.val);
      } else {
          res[deep] = [root.val];
      }
      dfs(root.left, deep + 1);
      dfs(root.right, deep + 1);
  }
  dfs(root, 0);
  return res.map(i => i.reduce((sum, cur) => sum + cur, 0) / i.length);
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
 var averageOfLevels = function(root) {
  let res = [];
  const bfs = (root) => {
      if (!root) return;
      let stack = [root];
      while (stack.length) {
          let curLevel = 0;
          let curLevelSum = 0;
          let length = stack.length;
          while (length--) {
              const node = stack.shift();
              curLevelSum += node.val;
              curLevel++;
              if (node.left) stack.push(node.left);
              if (node.right) stack.push(node.right);
          }
          res.push(curLevelSum / curLevel);
      }
  }
  bfs(root);
  return res;
};