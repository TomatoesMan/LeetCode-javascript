/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  let low = 0;
  let height = nums.length - 1;
  while (low <= height) {
      let mid = Math.floor((low + height) / 2);
      if (nums[mid] > target) {
          height  = mid - 1;
      } else if (nums[mid] < target) {
          low = mid + 1;
      } else {
          return mid;
      }
  }
  return -1;
};