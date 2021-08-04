/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
  let left = 0, right = 0;
  let res = [];
  let map = new Map();
  for (let c of p) {
      let val = map.get(c);
      map.set(c, val ? val + 1 : 1);
  }
  let mapSize = map.size;
  while (right < s.length) {
      if (map.has(s[right])) {
          map.set(s[right], map.get(s[right]) - 1);
          if (map.get(s[right]) === 0) { mapSize-- };
      }
      while (mapSize === 0) {
          let newStr = s.substring(left, right + 1);
          if (newStr.length === p.length) {
              res.push(left);
          }
          if (map.has(s[left])) {
              map.set(s[left], map.get(s[left]) + 1);
              if (map.get(s[left]) === 1) { mapSize++ };
          }
          left++;
      }
      right++;
  }
  return res;
};