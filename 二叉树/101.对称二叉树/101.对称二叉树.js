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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  if (!root) return true;
  const dfs = (p, q) => {
      if (!p && !q) {
          return true;
      }
      if (!p || !q) {
          return false;
      }
      if (p.val === q.val) {
          return dfs(p.left, q.right) && dfs(p.right, q.left);
      } else {
          return false;
      }
  }
  return dfs(root, root);
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
 * @return {boolean}
 */
 var isSymmetric = function(root) {
  if (!root) return true;
  const bfs = (p, q) => {
      const queue = [[p, q]];
      while (queue.length) {
          const [pNode, qNode] = queue.shift();
          if (!pNode && !qNode) {
             continue;
          }
          if (!pNode || !qNode) {
              return false;
          }
          if (pNode.val === qNode.val) {
              queue.push([pNode.left, qNode.right]);
              queue.push([pNode.right, qNode.left]);
          } else {
              return false;
          }
      }
      return true;
  }
  return bfs(root, root);
};