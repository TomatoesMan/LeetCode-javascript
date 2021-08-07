/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
  let ans = nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
      let start = i + 1;
      let end = nums.length - 1;
      while (start < end) {
          let sum = nums[i] + nums[start] + nums[end];
          if (Math.abs(sum - target) < Math.abs(ans - target)) {
              ans = sum;
          };
          if (sum > target) {
              end--;
          } else if (sum < target) {
              start++;
          } else {
              return ans;
          }
      }
  }
  return ans;
};