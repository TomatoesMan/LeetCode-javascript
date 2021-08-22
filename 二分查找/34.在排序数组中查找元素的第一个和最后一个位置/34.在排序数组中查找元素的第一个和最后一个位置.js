/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {
  let leftIndex = searchLower(nums, target);
  let rightIndex = searchHeighter(nums, target);
  if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
      return [leftIndex, rightIndex];
  }
  return [-1, -1];
};

const searchLower = (nums, target) => {
  let low = 0;
  let height = nums.length - 1;
  while (low <= height) {
      let mid = low + Math.floor((height - low) / 2);
      if (nums[mid] >= target) {
          height = mid - 1;
      } else if (nums[mid] < target) {
          low = mid + 1;
      }
  }
  return low;
}

const searchHeighter = (nums, target) => {
  let low = 0;
  let height = nums.length - 1;
  while (low <= height) {
      let mid = low + Math.floor((height - low) / 2);
      if (nums[mid] > target) {
          height = mid - 1;
      } else if (nums[mid] <= target) {
          low = mid + 1;
      }
  }
  return height;
}