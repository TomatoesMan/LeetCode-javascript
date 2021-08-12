/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  let right = 0;
  let left = 0;
  while (right < nums.length) {
      if (nums[right]) {
          swap(nums, left, right);
          left++;
      }
      right++;
  }
};
const swap = (nums, left, right) => {
  let temp = nums[left];
  nums[left] = nums[right];
  nums[right] = temp;
}