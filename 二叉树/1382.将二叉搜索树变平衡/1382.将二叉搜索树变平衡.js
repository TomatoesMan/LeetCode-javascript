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
 * @return {TreeNode}
 */
 var balanceBST = function(root) {
  let nums = [];
  const buildNums = n => {
      if (!n) return;
      buildNums(n.left);
      nums.push(n.val);
      buildNums(n.right);
  }
  buildNums(root)
  return buildBST(nums, 0, nums.length - 1);
};
var buildBST = (nums, start, end) => {
  if (start > end) {
      return null;
  }
  const midIdx = Math.floor((start + end) / 2);
  const root = new TreeNode(nums[midIdx]);
  root.left = buildBST(nums, start, midIdx - 1);
  root.right = buildBST(nums, midIdx + 1, end);
  return root;
}