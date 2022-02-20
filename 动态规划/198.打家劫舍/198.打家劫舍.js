/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  let dp0 = 0;
  let dp1 = nums[0];
  for (let i = 1; i < nums.length; i++) {
      const temp = dp1;
      dp1 = Math.max(dp1, dp0 + nums[i]);
      dp0 = temp;
  }
  return dp1;
};
