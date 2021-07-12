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
 * @return {number}
 */
 var pathSum = function(root, targetSum) {
  if (!root) return 0;
  let y = dfs(root, targetSum);
  let y1 = pathSum(root.left, targetSum);
  let y2 = pathSum(root.right, targetSum);
  return y + y1 + y2;
};

const dfs = (n, sum) => {
  if (!n) return 0;
  sum -= n.val;
  let x = sum === 0 ? 1 : 0;
  let x1 = dfs(n.left, sum);
  let x2 = dfs(n.right, sum);
  return x + x1 + x2;
}

