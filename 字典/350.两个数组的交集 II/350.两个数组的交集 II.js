/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersect = function(nums1, nums2) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
      let val = map.get(nums1[i]);
      map.set(nums1[i], val ? val + 1 : 1);
  }
  for (let i = 0; i < nums2.length; i++) {
      if (map.has(nums2[i])) {
          res.push(nums2[i]);
          let val = map.get(nums2[i]) - 1;
          if (!val) {
              map.delete(nums2[i])
          } else {
              map.set(nums2[i], val)
          }
      }
  }
  return res;
};