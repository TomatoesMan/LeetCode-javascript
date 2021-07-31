/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let len = nums.length;
  let count = len / 2;
  let map = new Map();
  for (let num of nums) {
      let val = map.get(num) ? map.get(num) + 1 : 1;
      if (val > count) {
          return num;
      }
      map.set(num, val)
  }
};