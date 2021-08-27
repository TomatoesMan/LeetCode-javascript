/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let dp = 0;
  let maxAns = nums[0];
  nums.forEach((item) => {
      dp = Math.max(dp + item, item);
      maxAns = Math.max(maxAns, dp);
  })
  return maxAns;
};