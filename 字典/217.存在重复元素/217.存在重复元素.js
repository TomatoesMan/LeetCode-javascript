/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  let map = new Map();
  for (let num of nums) {
      let val = map.get(num);
      if (val) {
          return true;
      } else {
          map.set(num, val ? val + 1 : 1);
      }
  }
  return false;
};