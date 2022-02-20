/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
  const robRange = (nums) => {
      let dp0 = 0;
      let dp1 = nums[0];
      for (let i = 1; i < nums.length; i++) {
          let temp = dp1;
          dp1 = Math.max(dp1, dp0 + nums[i]);
          dp0 = temp;
      }
      return dp1;
  }
  let l = nums.length;
  if (l === 1) {
      return nums[0];
  } else {
      return Math.max(robRange(nums.slice(1, l)), robRange(nums.slice(0, l - 1)));
  }
};