/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  let map = new Map();
  for (const item of s) {
      let val = map.get(item);
      map.set(item, val ? val + 1: 1);
  }
  for (const i of t) {
      if (map.has(i)) {
          let val = map.get(i) - 1;
          if (!val) {
              map.delete(i);
          } else {
              map.set(i, val);
          }
      } else {
          map.set(i, 1)
      }
  }
  return !map.size;
};