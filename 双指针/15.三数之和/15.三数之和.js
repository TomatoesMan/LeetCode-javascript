/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  let res = [];
  let len = nums.length;
  if (nums == null || len < 3) {
      return res;
  }
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
      let start = i + 1;
      let end = len - 1;
      if (i > 0 && nums[i] === nums[i - 1]) {continue}
      while (start < end) {
          let sum = nums[i] + nums[start] + nums[end];
          if (sum > 0) {
              end--;
          } else if (sum < 0) {
              start++;
          } else {
              res.push([nums[i], nums[start], nums[end]]);
              while (start < end && nums[start] === nums[start + 1]) {
                  start++;
              }
              while (start < end && nums[end] === nums[end - 1]) {
                  end--;
              }
              start++;
              end--;
          }
      }
  }
  return res;
};