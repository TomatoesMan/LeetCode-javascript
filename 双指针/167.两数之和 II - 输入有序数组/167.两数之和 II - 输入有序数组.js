/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  let res = [];
  while (left < numbers.length && left < right) {
      if (numbers[left] + numbers[right] < target) {
          left++;
      } else if (numbers[left] + numbers[right] > target) {
          right--;
      } else {
          res = [left + 1, right + 1];
          return res;
      }
  }
};