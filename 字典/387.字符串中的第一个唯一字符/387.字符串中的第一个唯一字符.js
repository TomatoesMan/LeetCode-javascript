/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
      if (map.has(s[i])) {
          map.set(s[i], -1);
      } else {
          map.set(s[i], i);
      }
  }
  for (let i of map.values()) {
      if (i !== -1) {
          return i
      }
  }
  return -1;
};